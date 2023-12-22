import FAQ from '@/models/faq';
import { connectToDB } from '@/utils/database';

export const submitFAQService = async (originalQuestion: string) => {
    connectToDB();
    try {
        const faq = new FAQ({
            originalQuestion: originalQuestion,
        });

        await FAQ.create(faq);
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
    }
};
