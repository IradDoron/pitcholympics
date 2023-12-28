'use client';

import { Locale } from '@/i18n.config';
import Link from 'next/link';

type ColorType = 'peach' | 'lambada';

type Props = {
    href: string;
    label: string;
    lang: Locale;
    colorType: ColorType;
};

export const GameLink = ({ href, label, colorType, lang }: Props) => {
    const commonStyles = {
        width: '218px',
        height: '218px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const colorVarients = {
        peach: 'bg-peach-light dark:bg-peach-dark',
        lambada: 'bg-lambada-light dark:bg-lambada-dark',
    };

    return (
        <Link
            href={`${lang}/games/how-to-play?game=${href}`}
            style={{
                ...commonStyles,
            }}
            className={`shadow-large-light dark:shadow-large-dark text-light-background-default dark:text-dark-background-default text-center text-xl font-bold rounded-[50%] ${colorVarients[colorType]}`}>
            {label}
        </Link>
    );
};
