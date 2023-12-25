import { connectToDB } from '@/utils/database';
import SuggestionPost from '@/models/suggestionPost';

export async function getSeggestionPostsService() {
    await connectToDB();
    try {
        const posts = await SuggestionPost.find();
        return posts;
    } catch (error) {
        console.log(error);
    }
}
