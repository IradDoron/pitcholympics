import { NextRequest, NextResponse } from 'next/server';
import { submitSuggestionPostService } from '@/app/services/submitSuggestionPostService';

export async function POST(request: NextRequest) {
    console.log('request from controller',request);
    const {post} = await request.json();
    await submitSuggestionPostService(post);
    return NextResponse.json('post submitted', { status: 200 });
}