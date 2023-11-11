'use client';

import Card from '@/components/core/card';
import MenuSection from './MenuSection';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import UserImage from './UserImage';
import UserName from './UserName';
import {
	ClientSafeProvider,
	getProviders,
	useSession,
	signOut,
} from 'next-auth/react';
import MenuItem from './MenuItem';
import GithubLogo from '@/components/icons/githubLogo';

type Props = {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const SettingsMenu = ({ isOpen, setIsOpen }: Props) => {
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

	return (
		<Card
			className='absolute top-20 right-6 flex flex-col'
			shadow='large'
			style={{
				width: '360px',
			}}
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
			</MenuSection>
		</Card>
	);
};

export default SettingsMenu;
