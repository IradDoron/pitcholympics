import { voteFAQService } from '@/app/services/voteFAQService';
import { NextRequest, NextResponse } from 'next/server';

export const PUT = async (request: NextRequest) => {
    const { faqId, userId, voteValue } = await request.json();
    voteFAQService(faqId, userId, voteValue);
    return NextResponse.json('vote complete!', { status: 200 });
};
