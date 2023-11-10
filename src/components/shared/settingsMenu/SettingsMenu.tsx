'use client';

import Card from '@/components/core/card';
import MenuSection from './MenuSection';
import { Dispatch, SetStateAction } from 'react';
import UserImage from './UserImage';
import UserName from './UserName';
import { useSession } from 'next-auth/react';

type Props = {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const SettingsMenu = ({ isOpen, setIsOpen }: Props) => {
	const { data: session } = useSession();
	if (!isOpen) return null;
	console.log(session);
	return (
		<Card className='absolute top-20 right-6 flex flex-col w-[360px]'>
			<MenuSection className='items-center justify-center'>
				<UserImage />
				<UserName label={session?.user?.name ?? ''} />
			</MenuSection>
			<MenuSection isLast={true}>
				<p>sign out</p>
			</MenuSection>
		</Card>
	);
};

export default SettingsMenu;
