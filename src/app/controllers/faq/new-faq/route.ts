import { submitFAQService } from '@/app/services/submitFAQService';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (request: NextRequest) => {
    const { question } = await request.json();
    await submitFAQService(question);
    return NextResponse.json({ question }, { status: 200 });
};
