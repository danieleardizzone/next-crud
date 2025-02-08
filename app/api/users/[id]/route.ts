import prisma from '@/app/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

// rotta per visualizzazione utente singolo
export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {

        const userId = parseInt((await params).id);

        const user = await prisma.user.findUnique({
            where: { id: userId },
        })

        if (!user) {
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }

        return NextResponse.json(user);

    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}

// rota per l'update dell'utente
export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {

        const userId = parseInt((await params).id);

        const body = await request.json();

        const user = await prisma.user.update({
            where: { id: userId },
            data: body,
        });

        return NextResponse.json({ success: true, user }, { status: 200 });

    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}