'use client';

import { Button } from '@/components/core';
import { Locale } from '@/i18n.config';
import { getDictionaryClient } from '@/utils/getDictionaryClient';
import PageFiller from '@shared/pageFiller';
import { useRouter } from 'next/navigation';

type Props = {
    params: { lang: Locale };
    searchParams: Record<
        'game',
        'memo-the-melo' | 'pitch-catch' | 'memo-blocks'
    >;
};

const Page = ({ params, searchParams }: Props) => {
    const router = useRouter();
    const { game } = searchParams;
    const { lang } = params;
    const dict = getDictionaryClient(lang);
    const {
        howToPlay,
        games,
        instructionsLabel,
        backButtonLabel,
        continueButtonLabel,
    } = dict.app['how-to-play'];

    const handleBackClick = () => {
        router.push(`/${lang}`);
    };

    const handleContinueClick = () => {
        router.push(`/${lang}/games/${game}`);
    };

    return (
        <>
            <PageFiller />
            <h1 className='w-fit m-auto text-2xl'>{games[game].title}</h1>
            <h2 className='w-fit m-auto text-xl'>{howToPlay}</h2>
            <section className='flex flex-col justify-start w-fit m-auto'>
                <h3 className='w-fit m-auto text-lg'>{instructionsLabel}</h3>
                {games[game].instructions.map((instruction, i) => {
                    return (
                        <p key={i} className='w-fit  '>
                            <span>
                                {i + 1}
                                {'. '}
                            </span>{' '}
                            {instruction}
                        </p>
                    );
                })}
            </section>
            <section className='flex flex-row justify-center gap-4 my-8'>
                <Button label={backButtonLabel} onClick={handleBackClick} />
                <Button
                    label={continueButtonLabel}
                    onClick={handleContinueClick}
                />
            </section>
        </>
    );
};

export default Page;
