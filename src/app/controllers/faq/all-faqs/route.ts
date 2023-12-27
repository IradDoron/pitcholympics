import { getFAQsService } from '@/app/services/getFAQsService';
import { NextResponse } from 'next/server';

export const GET = async () => {
    const faqs = await getFAQsService();
    return NextResponse.json(faqs, { status: 200 });
};
