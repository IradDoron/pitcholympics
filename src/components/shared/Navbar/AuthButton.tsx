'use client';

import { Button } from '@core';
import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';

type Props = {
    isSettingsMenuOpen: boolean;
    setIsSettingsMenuOpen: Dispatch<SetStateAction<boolean>>;
};

export const AuthButton = ({
    isSettingsMenuOpen,
    setIsSettingsMenuOpen,
}: Props) => {
    const { data: session } = useSession();

    if (session?.user) {
        return (
            <Image
                className='m-0.5 inline-block h-auto w-auto rounded-full ring-4 ring-light-primary-main hover:ring-light-secondary-main duration-300 dark:ring-dark-primary-light hover:dark:ring-dark-secondary-light cursor-pointer'
                src={session.user.image ?? ''}
                alt=''
                width={48}
                height={48}
                onClick={() => setIsSettingsMenuOpen(!isSettingsMenuOpen)}
            />
        );
    }

    return <Button onClick={() => signIn('google')} label='Sign In' />;
};
