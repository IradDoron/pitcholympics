import FAQ from '@/models/faq';
import { FAQ as FAQType } from '@/types';
import { connectToDB } from '@/utils/database';

export const voteFAQService = async (
    faqId: string,
    userId: string,
    voteValue: 1 | -1,
) => {
    connectToDB();

    try {
        const faq = (await FAQ.findById(faqId)) as FAQType;
        // check if user has already voted
        const isUserVote =
            faq.votes.find(
                (vote: { userId: string; value: number }) =>
                    vote.userId === userId,
            ) !== undefined;

        // if user has already voted, update vote value
        if (isUserVote) {
            const voteIndex = faq.votes.findIndex(
                (vote: { userId: string; value: number }) =>
                    vote.userId === userId,
            );
            faq.votes[voteIndex].value = voteValue;
        } else {
            // if user has not voted, add new vote
            faq.votes.push({ userId, value: voteValue });
        }

        // update FAQ document
        await FAQ.findOneAndUpdate({ _id: faqId }, faq);
    } catch (error) {
        console.log(error);
    }
};
