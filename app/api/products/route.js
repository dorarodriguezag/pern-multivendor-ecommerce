import { getPrisma } from "@/lib/prisma";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";


export async function GET(request) {
    try {

        const prisma = getPrisma();
        let products = await prisma.product.findMany({
            where: { inStock: true },
            include: {
                rating: {
                    select: { 
                        createdAt: true, rating: true, review: true, user: { select: {name: true, image: true} }
                    }},
                store: true,
            },
            orderBy: {createdAt: 'desc'},
        })

        //remove products with store isActive false
        products = products.filter(product => product.store.isActive);
        return NextResponse.json({products})
    } catch (error) {
        console.error(error);
        return NextResponse.json({error: error.code || error.message}, { status: 400 })
    }
}