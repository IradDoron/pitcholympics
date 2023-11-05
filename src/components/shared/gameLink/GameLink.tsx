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

	const colorVarients = {
		"peach": "bg-peach-light dark:bg-peach-dark",
		"lambada": "bg-lambada-light dark:bg-lambada-dark",
	}

	return (
		<Link
			href={href}
			style={{
				...commonStyles,
			}}
			className={`shadow-large-light dark:shadow-large-dark text-light-background-default dark:text-dark-background-default text-center text-xl font-bold rounded-[50%] ${colorVarients[colorType]}`}
		>
			{label}
		</Link>
	);
};

export default GameLink;
