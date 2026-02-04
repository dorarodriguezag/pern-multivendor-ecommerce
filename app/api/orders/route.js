import { getPrisma } from "@/lib/prisma";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";


export async function POST(request) {
  try {
        const prisma = getPrisma()
        const { userId, has } = getAuth(request)
        if(!userId) {
            return NextResponse.json({ error: "not authorized" }, { status: 401 })
        }
        const { addressId, items, couponCode, paymentMethod } = await request.json()

        //Check if all required fields are present
        if(!addressId || !paymentMethod || !items || !Array.isArray(items) || items.length === 0 ) {
            return NextResponse.json({ error: "missing order details" }, { status: 401 })
        }

        let coupon = null;

        if(couponCode) {
            coupon = await prisma.coupon.findUnique({
            where: {
                code: couponCode
            }
            })
            if(!coupon){
            return NextResponse.json({error: "Coupon not found"}, {status: 400}) 
        }
        }

        if(couponCode & coupon.forNewUser) {
            const userOrders = await prisma.order.findMany({
                where: {
                    userId
                }
            })
            if(userOrders.length > 0){
                return NextResponse.json({error: "Coupon valid for new users"}, {status: 400})
            }     
        }

        const isPlusMember = has({plan:'plus'})

        //Check if coupon is aplicable for members
        if (couponCode & coupon.forMember) {

            if (!hasPlusPlan) {
                return NextResponse.json({ error: "Coupon valid for members only" }, { status: 400 });
            }
        } 

        // Group orders by storeId using a Map
        const ordersByStore = new Map()
        
        for (const item of items) {
            const product = await prisma.product.findUnique({
            where: { id: item.id }
            })
            const storeId = product.storeId
            if (!ordersByStore.has(storeId)) {
            ordersByStore.set(storeId, [])
            }
            ordersByStore.get(storeId).push({ ...item, price: product.price })
        }

        const ordersId = [];
        let fullAmount = 0

        let isShippingFeeAdded = false;

        //Create orders for each seller
        for (const [storeId, storeItems] of ordersByStore.entries()) {
            let total = selectUnfilteredCartesianItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

            if(couponCode){
                total -= (total * coupon.discount) / 100
            }
            if(!isPlusMember && !isShippingFeeAdded){
                total += 5;
                isShippingFeeAdded = true;
            }

            fullAmount += parseFloat(total.toFixed(2));

            const order = await prisma.order.create({
                data: {
                    userId,
                    storeId,
                    addressId,
                    total: parseFloat(total.toFixed(2)),
                    paymentMethod,
                    isCouponUsed: coupon ? true : false,
                    coupon: coupon ? coupon : {},
                    orderItems: {
                        create: sellerItems.map(item => ({
                            productId: item.id,
                            quantity: item.quantity,
                            price: item.price
                        })) 
                    }
                }
            })
            ordersId.push(order.id)
        }

        //clear the cart
        await prisma.user.update()({
            where: { id: userId },
            data: { cart: [] }
        })

        return NextResponse.json({ message: "Order placed successfully"})   

    }catch (error) {
        console.error(error)
        return NextResponse.json({error: error.code || error.message}, { status: 400 })
    } 
}


//Get all orders for a user
export async function GET(request) {
    try {
        const prisma = getPrisma()
        const { userId } = getAuth(request)
        const orders = await prisma.order.findMany({
            where: { userId, OR: [
                {paymentMethod: paymentMethod.COD},
                {AND: [
                    {paymentMethod: paymentMethod.STRIPE},
                    {isPaid: true}
                ]}
            ]},
            include: {
                orderItems: {include: { product: true }},
                address: true
            },
            orderBy: { createdAt: 'desc' }
        
        })

        return NextResponse.json({ orders })

    } catch (error) {
        console.error(error)
        return NextResponse.json({error: error.code || error.message}, { status: 400 })
    }

}
    
