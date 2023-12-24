import { Post as PostType} from '@/types';
import { connectToDB } from '@/utils/database';
import Post from '@/models/post';

export const submitSuggestionPostService = async (post: PostType) => {
    connectToDB();
    try {
        console.log( 'post from service',post)
        await Post.create(post);
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
    }
};



















/* 
import FAQ from '@/models/faq';
import { FAQ as FAQType } from '@/types';
import { connectToDB } from '@/utils/database';

export const submitFAQService = async (originalQuestion: string) => {
    connectToDB();
    try {
        const faq = new FAQ({
            originalQuestion: originalQuestion,
        }) as FAQType;

        await FAQ.create(faq);
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
    }
};




















*/