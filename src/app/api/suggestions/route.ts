import { getSeggestionPosts, submitSuggestionPost } from '@dbActions';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (request: NextRequest) => {
    // console.log('request body from controller', request.body);
    const { post } = await request.json();

    console.log('post from controller', post);
    await submitSuggestionPost(post);
    return NextResponse.json('post submitted', { status: 200 });
};

export const GET = async () => {
    const posts = await getSeggestionPosts();
    return NextResponse.json(posts, { status: 200 });
};
