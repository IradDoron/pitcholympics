import { deleteSuggestionPostService } from '@/app/services/deleteSuggestionPostService';
import { updateSuggestionPostService } from '@/app/services/updateSuggestionPostService';
import { NextRequest, NextResponse } from 'next/server';

type Params = {
    suggestionPostId: string;
};

export const PUT = async (request: NextRequest, params: Params) => {
    // console.log('request body from controller', request.body);
    const post = await request.json();
    console.log('the post has been edited', post);
    await updateSuggestionPostService(params.suggestionPostId, post);
    return NextResponse.json('post updated', { status: 200 });
};

export const DELETE = async (request: NextRequest, params: Params) => {
    console.log('the post as been deleted', params.suggestionPostId);
    await deleteSuggestionPostService(params.suggestionPostId);
    return NextResponse.json('post updated', { status: 200 });
};
