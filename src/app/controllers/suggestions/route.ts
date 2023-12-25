import { getSeggestionPostsService } from '@/app/services/getSuggestionPostsService';
import { submitSuggestionPostService } from '@/app/services/submitSuggestionPostService';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (request: NextRequest) => {
    // console.log('request body from controller', request.body);
    const { post } = await request.json();

    console.log('post from controller', post);
    await submitSuggestionPostService(post);
    return NextResponse.json('post submitted', { status: 200 });
};

export const GET = async () => {
    const posts = await getSeggestionPostsService();
    return NextResponse.json(posts, { status: 200 });
};
