import { submitFAQService } from '@/app/services/submitFAQService';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (request: NextRequest) => {
    const { originalQuestion } = await request.json();
    await submitFAQService(originalQuestion);
    return NextResponse.json({ originalQuestion }, { status: 200 });
};
