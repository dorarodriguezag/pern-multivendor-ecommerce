import authSeller from "@/middlewares/authSeller";
import { getAuth } from "@clerk/nextjs/server";
import { getPrisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


// Update seller order status
export async function POST(request) {
    try {
        const prisma = getPrisma();
        const { userId } = getAuth(request);
        const storeId = await authSeller(userId);

         if(!storeId){
            return NextResponse.json({error: "not authorized"}, {status: 401})
        }

        const { orderId, status } = await request.json();

        await prisma.order.update({
            where: { id: orderId, storeId },
            data: { status }
        })

        return NextResponse.json({ message: "Order Status updated " }) 
    } catch (error) {
        console.error(error);
        return NextResponse.json({error: error.code || error.message}, { status: 400 })           
    }
}