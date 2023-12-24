import Post from '@/models/post';
import { Post as PostType } from '@/types';
import { connectToDB } from '@/utils/database';

export const submitSuggestionPostService = async (post: PostType) => {
    connectToDB();
    try {
        await Post.create(post);
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
    }
};
