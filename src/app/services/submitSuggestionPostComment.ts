import SuggestionPost from '@/models/suggestionPost';
import { PostComment} from '@/types';
import { connectToDB } from '@/utils/database';
import { getSeggestionPostService } from './getSuggestionPostService';

export const submitSuggestionPostCommentService = async (
    comment: PostComment,
    commentId: string,
    postId: string
) => {
    connectToDB();
    try {
        const posts = await getSeggestionPostService(postId);
        await SuggestionPost.findByIdAndUpdate(commentId, comment);
    } catch (error) {
        console.log(error);
    }
};
