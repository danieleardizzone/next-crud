import prisma from '@/app/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const userSchema = z.object({
    name: z.string({ required_error: 'Name is required' })
        .min(2, { message: 'Name must be at least 2 characters' })
        .max(50, { message: 'Name must be at most 50 characters' }),

    email: z.string({ required_error: 'Email is required' })
        .email({ message: 'Enter a valid email' })
        .max(50, { message: 'Email must be at most 50 characters' }),
})

// create user 
export async function POST(request: NextRequest) {
    try {

        const body = await request.json();

        const validatedData = userSchema.parse(body);

        const existingUser = await prisma.user.findUnique({
            where: { email: validatedData.email },
        });
        if (existingUser) {
            return NextResponse.json({ message: 'This email is alredy in use' }, { status: 409 })
        }

        const user = await prisma.user.create({
            data: validatedData,
        });

        return NextResponse.json({ success: true, user }, { status: 201 })

    } catch (error) {

        if (error instanceof z.ZodError) {
            return NextResponse.json({ message: 'Error in user validation', errors: error.errors }, { status: 422 });
        }

        return NextResponse.json({ message: 'Error in user creation' }, { status: 500 });

    }
}


// users list
export async function GET() {
    try {

        const users = await prisma.user.findMany({
            where: { deleted: false },
        });

        return NextResponse.json(users, { status: 200 });

    } catch (error) {
        return NextResponse.json({ message: 'Error in users retrieval' }, { status: 500 });
    }
}