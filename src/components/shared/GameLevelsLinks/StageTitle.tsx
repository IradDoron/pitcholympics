'use client';

import { Locale } from '@/i18n.config';
import { getDictionaryClient } from '@utils';
import { usePathname } from 'next/navigation';

type Props = {
    stageNumber: number;
};

const StageTitle = ({ stageNumber }: Props) => {
    const lang = usePathname().split('/')[1] as Locale;
    const dict = getDictionaryClient(lang);
    const { StageTitle } = dict.shared.gameLevelsLinks;
    return (
        <h2 className='text-light-background-onDefault dark:text-dark-background-onDefault text-lg sm:text-xl mb-4'>
            <span>{StageTitle}</span> <span>{stageNumber}</span>
        </h2>
    );
};

export default StageTitle;
