'use client';

import { Locale } from '@/i18n.config';
import { getDictionaryClient } from '@/utils/getDictionaryClient';

type Props = {
    lang: Locale;
};
const ComingSoonSection = ({ lang }: Props) => {
    const dict = getDictionaryClient(lang);

    const { comingSoonSection } = dict.shared;

    return (
        <div>
            <h2 className='text-xl w-fit m-auto'>{comingSoonSection}</h2>;
        </div>
    );
};

export default ComingSoonSection;
