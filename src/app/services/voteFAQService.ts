import FAQ from '@/models/faq';
import { FAQ as FAQType, Vote } from '@/types';
import { connectToDB } from '@/utils/database';
import { ObjectId } from 'mongoose';

export const voteFAQService = async (
    faqId: ObjectId,
    userId: ObjectId,
    voteValue: 1 | -1,
) => {
    connectToDB();

    try {
        const faq = (await FAQ.findById(faqId)) as FAQType;
        // check if user has already voted
        let isUserVote = false as boolean;
        faq.votes.forEach((vote: Vote) => {
            if (vote.userId === userId) {
                isUserVote = true;
            }
        });

        // if user has already voted, update vote value
        if (isUserVote) {
            const voteIndex = faq.votes.findIndex(
                (vote: { userId: ObjectId; value: number }) =>
                    vote.userId === userId,
            );
            faq.votes[voteIndex].value = voteValue;
        } else {
            // if user has not voted, add new vote
            const newVote = { userId, value: voteValue } as Vote;
            const newVotes = [...faq.votes, newVote] as Vote[];

            console.log('update faq');
        }

        // update FAQ document
    } catch (error) {
        console.log(error);
    }
};
