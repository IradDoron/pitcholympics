'use client';

import { useTheme } from '@/context/ThemeProvider';
import { useEffect, useMemo } from 'react';

type Props = {
	title: string;
};

const PageTitle = ({ title }: Props) => {
	const { mode } = useTheme();

	const memoMode = useMemo(
		() => `text-3xl font-bold underline bg-primary_${mode}`,
		[mode]
	);

	console.log('memoMode', memoMode);

	return <h1 className={memoMode}>{title}</h1>;
};

export default PageTitle;
