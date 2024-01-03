import { getFAQs, submitFAQ } from '@dbActions';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async () => {
    const faqs = await getFAQs();
    return NextResponse.json(faqs, { status: 200 });
};

export const POST = async (request: NextRequest) => {
    const { originalQuestion } = await request.json();
    await submitFAQ(originalQuestion);
    return NextResponse.json({ originalQuestion }, { status: 200 });
};
