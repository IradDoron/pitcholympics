'use client';

import { Locale } from '@/i18n.config';
import { Card } from '@core';
import { css } from '@emotion/css';
import { CloseIcon, GithubLogo } from '@icons';
import { UserImage } from '@shared';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { MenuItem } from './MenuItem';
import { MenuSection } from './MenuSection';
import { TransparentBg } from './TransparentBg';
import { UserName } from './UserName';

type Props = {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    lang: Locale;
};

export const SettingsMenu = ({ isOpen, setIsOpen, lang }: Props) => {
    const router = useRouter();
    const { data: session } = useSession();

    useEffect(() => {
        (async () => {
            // const response = await getProviders();
            // setProviders(response);
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
            styles={css`
                display: flex;
                position: fixed;
                top: 0;
                flex-direction: column;
                width: 100vw;
                height: 100vh;

                @media (min-width: 640px) {
                    position: absolute;
                    top: 5rem;
                    height: fit-content;
                    max-width: 360px;
                }
            `}
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
