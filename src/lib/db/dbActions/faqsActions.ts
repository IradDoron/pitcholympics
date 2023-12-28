import { FAQ } from '@models';
import { FAQ as FAQType } from '@types';
import { connectToDB, mapToObject } from '@utils';

export async function getFAQs() {
    connectToDB();
    try {
        const faqs = (await FAQ.find()) as FAQType[];
        return faqs;
    } catch (error) {
        console.log(error);
    }
}

export const submitFAQ = async (originalQuestion: string) => {
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

export const voteFAQ = async (
    faqId: string,
    userId: string,
    voteValue: 1 | -1,
) => {
    connectToDB();

    try {
        const faq = await FAQ.findById(faqId);

        const votes = faq.votes;

        const votesObject = mapToObject(votes);

        votesObject[userId] = voteValue;

        await FAQ.findByIdAndUpdate(faqId, { votes: votesObject });
    } catch (error) {
        console.log(error);
    }
};
