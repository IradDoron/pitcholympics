'use client';

import { useTheme } from '@/context/ThemeProvider';
import { useMemo } from 'react';

type Props = {
    title: string;
};

export const PageTitle = ({ title }: Props) => {
    const { mode } = useTheme();

    const memoMode = useMemo(
        () => `text-3xl font-bold underline bg-primary_${mode}`,
        [mode],
    );

    return <h1 className={memoMode}>{title}</h1>;
};
