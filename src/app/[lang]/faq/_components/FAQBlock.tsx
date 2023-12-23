'use client';

import { Locale } from '@/i18n.config';
import { FAQ } from '@/types';
import { Button } from '@core';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

type Props = {
    faq: FAQ;
    lang: Locale;
};

export const FAQBlock = ({ faq, lang }: Props) => {
    const { data: session } = useSession();
    const [currentVotes, setCurrentVotes] = useState<
        Record<string, 1 | -1 | 0>
    >(faq.votes);
    const [currentUserVote, setCurrentUserVote] = useState<1 | -1 | 0>(0);
    const { originalQuestion, _id: faqId } = faq;

    const calculateVoteCount = (votes: Record<string, number>) => {
        let total = 0;
        Object.keys(votes).forEach(key => {
            total += votes[key];
        });
        return total;
    };

    const handleVoteClick = async (value: 1 | -1) => {
        const url = `/controllers/faq/vote`;
        await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                faqId,
                voteValue: value,
                // @ts-expect-error - session is not null
                userId: session?.user?.id,
            }),
        });

        const newVotes = { ...currentVotes } as Record<string, 1 | -1 | 0>;

        // @ts-expect-error - session is not null
        newVotes[session?.user?.id] = value;

        setCurrentVotes(newVotes);
    };

    useEffect(() => {
        // @ts-expect-error - session is not null
        const userVote = currentVotes[session?.user?.id];
        setCurrentUserVote(userVote);
    });

    return (
        <div className='flex flex-col mx-2 my-12'>
            <div className='flex flex-row'>
                <h2 className='text-xl font-bold'>{originalQuestion}</h2>
            </div>
            <div className='flex flex-row'>
                <p className='text-xl'>
                    Votes: {calculateVoteCount(currentVotes)}
                </p>
            </div>
            <div>
                <Button
                    onClick={() => handleVoteClick(1)}
                    label='Up Vote'
                    state={currentUserVote === 1 ? 'clicked' : 'default'}
                />
                <Button
                    onClick={() => handleVoteClick(-1)}
                    label='Down Vote'
                    state={currentUserVote === -1 ? 'clicked' : 'default'}
                />
            </div>
            <div className='h-1 bg-black m-2'></div>
        </div>
    );
};
