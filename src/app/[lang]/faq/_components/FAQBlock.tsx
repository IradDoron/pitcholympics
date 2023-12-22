'use client';

import { Locale } from '@/i18n.config';
import { FAQ } from '@/types';
import { Button } from '@core';
import { useSession } from 'next-auth/react';

type Props = {
    faq: FAQ;
    lang: Locale;
};

export const FAQBlock = ({ faq, lang }: Props) => {
    const { data: session } = useSession();
    const { originalQuestion, votes, _id: faqId } = faq;

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
    };

    return (
        <div className='flex flex-col mx-2 my-12'>
            <div className='flex flex-row'>
                <h2 className='text-xl font-bold'>{originalQuestion}</h2>
            </div>
            <div className='flex flex-row'>
                <p className='text-xl'>Votes: {votes.length}</p>
            </div>
            <div>
                <Button onClick={() => handleVoteClick(1)} label='Up Vote' />
                <Button onClick={() => handleVoteClick(-1)} label='Down Vote' />
            </div>
            <div className='h-1 bg-black m-2'></div>
        </div>
    );
};
