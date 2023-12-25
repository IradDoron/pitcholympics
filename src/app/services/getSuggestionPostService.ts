import SuggestionPost from "@/models/suggestionPost";
import { connectToDB } from "@/utils/database";


export const getSeggestionPostService = async (id: string) => { 
    connectToDB();
    try {
        const post = await SuggestionPost.findById(id);
        return post;
    } catch (error) {
        console.log(error);
    }
}