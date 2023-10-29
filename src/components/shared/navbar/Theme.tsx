'use client';

import { useTheme } from '@/context/ThemeProvider';
import Image from 'next/image';
import { themes } from '@/constants';
import Menubar from '@/components/core/menubar';
import {
	MenubarTrigger,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
} from '@radix-ui/react-menubar';

const Theme = () => {
	const { mode, setMode } = useTheme();

	return (
		<Menubar
			trigger={
				<div>
					{mode === 'light' ? (
						<Image
							src='/assets/icons/sun.svg'
							alt='sun'
							width={20}
							height={20}
							className='active-theme'
						/>
					) : (
						<Image
							src='/assets/icons/moon.svg'
							alt='moon'
							width={20}
							height={20}
							className='active-theme'
						/>
					)}
				</div>
			}
			content={
				<div>
					{themes.map((item) => (
						<div
							key={item.value}
							className='flex items-center gap-4 px-2.5 py-2 dark:focus:bg-dark-400'
							onClick={() => {
								setMode(item.value);
								if (item.value !== 'system') {
									localStorage.theme = item.value;
								} else {
									localStorage.removeItem('theme');
								}
							}}
						>
							<Image
								src={item.icon}
								alt={item.value}
								width={16}
								height={16}
								className={`${mode === item.value && 'active-theme'}`}
							/>
							<p
								className={`body-semibold text-light-500 ${
									mode === item.value
										? 'text-primary-500'
										: 'text-dark100_light900'
								}`}
							>
								{item.label}
							</p>
						</div>
					))}
				</div>
			}
		></Menubar>
	);
};

export default Theme;
