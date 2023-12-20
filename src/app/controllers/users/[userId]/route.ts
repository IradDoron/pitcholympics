import { getUserService } from '@/app/services/getUserService';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest, { params }: any) {
    const user = await getUserService(params.userId);
    return NextResponse.json({ user }, { status: 200 });
}
