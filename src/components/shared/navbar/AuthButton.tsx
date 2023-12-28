'use client';

import {
    ClientSafeProvider,
    getProviders,
    signIn,
    useSession,
} from 'next-auth/react';
import Image from 'next/image';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

type Props = {
    isSettingsMenuOpen: boolean;
    setIsSettingsMenuOpen: Dispatch<SetStateAction<boolean>>;
};

export const AuthButton = ({
    isSettingsMenuOpen,
    setIsSettingsMenuOpen,
}: Props) => {
    const { data: session } = useSession();

    const [providers, setProviders] = useState<Record<
        string,
        ClientSafeProvider
    > | null>(null);

    useEffect(() => {
        (async () => {
            const response = await getProviders();
            console.log('response', response);
            setProviders(response);
        })();
    }, []);

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

    return (
        <>
            {providers &&
                Object.values(providers).map(provider => (
                    <button
                        type='button'
                        key={provider.name}
                        onClick={() => signIn(provider.id)}
                        className='rounded-full border border-black bg-black py-1.5 px-5 text-white transition-all hover-bg-white hover-text-black text-center text-sm font-inter flex items-center justify-center'>
                        Sign In
                    </button>
                ))}
        </>
    );
};
