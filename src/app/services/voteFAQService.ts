import FAQ from '@/models/faq';
import { mapToObject } from '@/utils';
import { connectToDB } from '@/utils/database';

export const voteFAQService = async (
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
