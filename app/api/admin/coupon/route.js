import authAdmin from "@/middlewares/authAdmin";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { getPrisma } from "@/lib/prisma";

//Add new coupon
export async function POST(request) {
    try {
        const prisma = getPrisma();
        const { userId } = getAuth(request)
        const isAdmin = await authAdmin(userId)
        
        if(!isAdmin) {
            return NextResponse.json({error: "not authorized"}, {status: 401})
        }

        const { coupon } = await request.json()
        coupon.code = coupon.code.toUpperCase()

        await prisma.coupon.create({dara: coupon})

        return NextResponse.json({ message: "Coupon added successfully"})

    } catch (error) {
        console.error(error);
        return NextResponse.json({error: error.code || error.message}, { status: 400 })
    }
}