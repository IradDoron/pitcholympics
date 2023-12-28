'use server';

import { SuggestionPost } from '@models';
import { PostComment, Post as PostType } from '@types';
import { connectToDB } from '@utils';
import mongoose from 'mongoose';

export async function deleteSuggestionPost(postId: string) {
    connectToDB();
    try {
        if (!mongoose.Types.ObjectId.isValid(postId)) {
            console.log('Invalid postId');
            return;
        }

        await SuggestionPost.findByIdAndDelete(postId);
        console.log('Post deleted successfully');
    } catch (error) {
        console.log(error);
    }
}

export const getSeggestionPost = async (id: string) => {
    connectToDB();
    try {
        const post = await SuggestionPost.findById(id);
        return post;
    } catch (error) {
        console.log(error);
    }
};

export async function getSeggestionPosts() {
    await connectToDB();
    try {
        const posts = await SuggestionPost.find();
        return posts;
    } catch (error) {
        console.log(error);
    }
}

export const submitSuggestionPost = async (post: PostType) => {
    connectToDB();
    try {
        await SuggestionPost.create(post);
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
    }
};

export const submitSuggestionPostComment = async (
    comment: PostComment,
    commentId: string,
    postId: string,
) => {
    connectToDB();
    try {
        const posts = await getSeggestionPost(postId);
        await SuggestionPost.findByIdAndUpdate(commentId, comment);
    } catch (error) {
        console.log(error);
    }
};

export async function updateSuggestionPost(postId: string, post: PostType) {
    connectToDB();
    try {
        await SuggestionPost.findByIdAndUpdate(postId, post);
    } catch (error) {
        console.log(error);
    }
}
