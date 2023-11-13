'use client';

import Card from '@/components/core/card';
import { useRouter } from 'next/navigation';
import MenuSection from './MenuSection';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import UserImage from '@/components/shared/userImage';
import UserName from './UserName';
import {
	ClientSafeProvider,
	getProviders,
	useSession,
	signOut,
} from 'next-auth/react';
import MenuItem from './MenuItem';
import GithubLogo from '@/components/icons/githubLogo';
import { Locale } from '@/i18n.config';
import TransparentBg from './TransparentBg';

type Props = {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
	lang: Locale;
};

const SettingsMenu = ({ isOpen, setIsOpen, lang }: Props) => {
	const router = useRouter();
	const { data: session } = useSession();

	const [providers, setProviders] = useState<Record<
		string,
		ClientSafeProvider
	> | null>(null);

	useEffect(() => {
		(async () => {
			const response = await getProviders();
			setProviders(response);
		})();
	}, []);

	if (!isOpen) return null;
	console.log(session);

	const handleSignOut = () => {
		signOut();
		setIsOpen(false);
	};

	const handleProfile = () => {
		router.push(`/${lang}/profile`);
	};

	return (
		<Card
			className='fixed w-screen h-screen top-0 end-0 sm:absolute sm:top-20 sm:end-6 sm:max-w-[360px] flex flex-col'
			shadow='large'
			style={
				{
					// width: '360px',
				}
			}
		>
			<MenuSection className='items-center justify-center p-4'>
				<UserImage />
				<UserName label={session?.user?.name ?? ''} />
			</MenuSection>
			<MenuSection isLast={true}>
				<MenuItem
					label='Sign Out'
					onClick={handleSignOut}
					icon={<GithubLogo />}
				/>
				<MenuItem
					label='Enter Profile'
					onClick={handleProfile}
					icon={<GithubLogo />}
				/>
			</MenuSection>
			<div></div>
		</Card>
	);
};

export default SettingsMenu;
