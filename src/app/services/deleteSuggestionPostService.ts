import SuggestionPost from "@/models/suggestionPost";
import { connectToDB } from "@/utils/database";
import mongoose from "mongoose";


export async function deleteSuggestionPostService(postId: string) {
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
