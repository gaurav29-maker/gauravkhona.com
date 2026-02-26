import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';

export async function POST() {
    try {
        // Initialize Razorpay
        const razorpay = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID!,
            key_secret: process.env.RAZORPAY_KEY_SECRET!,
        });

        // Create Order options
        const options = {
            amount: 9000 * 100, // Amount in paise (₹9000)
            currency: 'INR',
            receipt: 'receipt_' + Math.random().toString(36).substring(7),
        };

        // Create Order via Razorpay
        const order = await razorpay.orders.create(options);

        // Return Order ID to frontend
        return NextResponse.json({
            id: order.id,
            currency: order.currency,
            amount: order.amount,
        }, { status: 200 });

    } catch (error) {
        console.error("Error creating Razorpay order:", error);
        return NextResponse.json(
            { message: "Error creating order", error: error },
            { status: 500 }
        );
    }
}
