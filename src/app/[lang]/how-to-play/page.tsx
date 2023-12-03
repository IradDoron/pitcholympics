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
    const { howToPlay, games } = dict.app['how-to-play'];
    return (
        <div>
            <PageFiller />
            <h1 className='w-fit m-auto text-2xl'>{games[game]}</h1>
            <h2 className='w-fit m-auto text-xl'>{howToPlay}</h2>
        </div>
    );
};

export default Page;
