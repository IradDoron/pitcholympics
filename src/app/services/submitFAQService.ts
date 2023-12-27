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
