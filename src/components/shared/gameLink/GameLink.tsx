'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

type ColorType = 'peach' | 'lambada';

type Props = {
	href: string;
	label: string;
	colorType: ColorType;
};

const GameLink = ({ href, label, colorType }: Props) => {
	const commonStyles = {
		width: '218px',
		height: '218px',
		borderRadius: '50%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	};

	switch (colorType) {
		case 'peach': {
			return (
				<Link
					href={href}
					style={{
						...commonStyles,
					}}
					className='text-xl font-bold rounded-[50%] text-light-background-default dark:text-dark-background-default bg-peach-light dark:bg-peach-dark shadow-large-light dark:shadow-large-dark'
				>
					{label}
				</Link>
			);
		}
		case 'lambada': {
			return (
				<Link
					href={href}
					style={{
						...commonStyles,
					}}
					className='text-xl font-bold rounded-[50%] text-light-background-default dark:text-dark-background-default bg-lambada-light dark:bg-lambada-dark shadow-large-light dark:shadow-large-dark'
				>
					{label}
				</Link>
			);
		}
	}
};

export default GameLink;
