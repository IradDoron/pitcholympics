'use client';

import { Locale } from '@/i18n.config';
import { FAQ } from '@/types';
import { Button } from '@core';
import { useSession } from 'next-auth/react';
import { useState } from 'react';

type Props = {
    faq: FAQ;
    lang: Locale;
};

export const FAQBlock = ({ faq, lang }: Props) => {
    const { data: session } = useSession();
    const [currentVotes, setCurrentVotes] = useState<Record<string, number>>(
        faq.votes,
    );
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

        const newVotes = { ...currentVotes } as Record<string, number>;

        // @ts-expect-error - session is not null
        newVotes[session?.user?.id] = value;

        setCurrentVotes(newVotes);
    };

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
                <Button onClick={() => handleVoteClick(1)} label='Up Vote' />
                <Button onClick={() => handleVoteClick(-1)} label='Down Vote' />
            </div>
            <div className='h-1 bg-black m-2'></div>
        </div>
    );
};
