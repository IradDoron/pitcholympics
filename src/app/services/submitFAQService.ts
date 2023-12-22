import FAQ from '@/models/faq';
import { connectToDB } from '@/utils/database';

export const submitFAQService = async (question: string) => {
    connectToDB();
    try {
        const faq = new FAQ({
            votes: [],
            question,
        });
        await FAQ.create(faq);
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
    }
};
