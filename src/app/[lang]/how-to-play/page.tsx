'use client';

import { Locale } from '@/i18n.config';
import { getDictionaryClient } from '@/utils/getDictionaryClient';
import PageFiller from '@shared/pageFiller';

type Props = {
    params: { lang: Locale };
    searchParams: Record<
        'game',
        'memo-the-melo' | 'pitch-catch' | 'memo-blocks'
    >;
};

const Page = ({ params, searchParams }: Props) => {
    const { game } = searchParams;
    const { lang } = params;
    const dict = getDictionaryClient(lang);
    const { howToPlay, games, instructionsLabel } = dict.app['how-to-play'];
    return (
        <div>
            <PageFiller />
            <h1 className='w-fit m-auto text-2xl'>{games[game].title}</h1>
            <h2 className='w-fit m-auto text-xl'>{howToPlay}</h2>
            <div>
                <h3 className='w-fit m-auto text-lg'>{instructionsLabel}</h3>
                <div className='flex flex-col justify-start w-fit m-auto'>
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
                </div>
            </div>
        </div>
    );
};

export default Page;
