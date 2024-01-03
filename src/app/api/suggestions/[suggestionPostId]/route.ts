import { deleteSuggestionPost, updateSuggestionPost } from '@dbActions';
import { NextRequest, NextResponse } from 'next/server';

type Params = {
    suggestionPostId: string;
};

export const PUT = async (request: NextRequest, params: Params) => {
    const post = await request.json();
    await updateSuggestionPost(params.suggestionPostId, post);
    return NextResponse.json('post updated', { status: 200 });
};

export const DELETE = async (request: NextRequest, params: Params) => {
    await deleteSuggestionPost(params.suggestionPostId);
    return NextResponse.json('post updated', { status: 200 });
};
