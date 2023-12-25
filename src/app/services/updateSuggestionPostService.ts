import SuggestionPost from '@/models/suggestionPost';
import { Post as PostType } from '@/types';
import { connectToDB } from '@/utils/database';

export async function updateSuggestionPostService(postId: string, post: PostType) {
    connectToDB();
    try {
        await SuggestionPost.findByIdAndUpdate(postId, post);
    } catch (error) {
        console.log(error);
    }
}
