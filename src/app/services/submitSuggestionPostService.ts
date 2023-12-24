import SuggestionPost from '@/models/suggestionPost';
import { Post as PostType } from '@/types';
import { connectToDB } from '@/utils/database';

export const submitSuggestionPostService = async (post: PostType) => {
    connectToDB();
    try {
        await SuggestionPost.create(post);
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
    }
};
