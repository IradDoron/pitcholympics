'use client';

import { Locale } from '@/i18n.config';
import { Card } from '@core';
import { CloseIcon, GithubLogo } from '@icons';
import { UserImage } from '@shared';
import {
    ClientSafeProvider,
    getProviders,
    signOut,
    useSession,
} from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import MenuItem from './MenuItem';
import MenuSection from './MenuSection';
import TransparentBg from './TransparentBg';
import UserName from './UserName';

type Props = {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    lang: Locale;
};

export const SettingsMenu = ({ isOpen, setIsOpen, lang }: Props) => {
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

    const handleSignOut = () => {
        signOut();
        setIsOpen(false);
    };

    const handleProfile = () => {
        router.push(`/${lang}/profile`);
        setIsOpen(false);
    };

    const handleCardClick = (e: any) => {
        e.stopPropagation();
    };

    return (
        <Card
            className=' w-screen h-screen fixed top-0 end-0 sm:absolute sm:top-20 sm:end-6 sm:max-w-[360px] sm:h-fit flex flex-col'
            shadow='large'
            onClick={handleCardClick}>
            <CloseIcon
                onClick={() => setIsOpen(false)}
                className='absolute top-4 end-4 cursor-pointer sm:hidden'
                color='primary'
                size='large'
            />
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
            <TransparentBg setIsOpen={setIsOpen} />
        </Card>
    );
};
