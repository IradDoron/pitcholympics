'use client';

import { Locale } from '@/i18n.config';
import { NeedToLoggedIn } from '@shared';
import { User } from '@types';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { Achievements, GameProgress, StatsSection } from './_components';

type Props = {
    params: {
        lang: Locale;
    };
};

const Page = ({ params }: Props) => {
    const [user, setUser] = useState<User | null>(null);
    const { data: session } = useSession();
    const { lang } = params;

    const fetchUser = async (): Promise<User | null> => {
        try {
            const url = `/api/users/${session?.user?.id}`;
            const res = await fetch(url);
            const user = (await res.json()) as User | undefined;
            if (!user) return null;
            return user;
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log('error', error);
            return null; // Handle the error and return null
        }
    };

    const getUser = async () => {
        const user = await fetchUser();
        console.log('user', user);
        setUser(user);
    };

    if (session && !user) {
        getUser();
    }

    if (!session) return <NeedToLoggedIn />;

    if (!user) return null;

    return (
        <div>
            <div className='flex flex-col gap-0'>
                <StatsSection
                    type='resources'
                    lang={lang}
                    color='primary'
                    user={user}
                />
                <StatsSection
                    type='gamesStats'
                    lang={lang}
                    color='secondary'
                    user={user}
                />
            </div>
            <GameProgress />
            <Achievements lang={lang} />
        </div>
    );
};

export default Page;
