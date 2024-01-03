import { submitSuggestionPostComment } from '@dbActions';
import { PostComment } from '@types';
import { NextRequest, NextResponse } from 'next/server';

type Params = {
    commentId: string;
    postId: string;
    comment: PostComment;
};

export const PUT = async (req: NextRequest, params: Params) => {
    const { comment } = await req.json();
    const { commentId } = params;
    console.log('comment from controller', comment);
    await submitSuggestionPostComment(
        params.comment,
        params.commentId,
        params.postId,
    );
    return NextResponse.json('post updated', { status: 200 });
};
