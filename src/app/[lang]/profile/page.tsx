'use client';

import React, { useEffect, useState } from 'react';
import { Card } from '@/components/core';
import UserImage from '@/components/shared/userImage';
import ProfileInfo from '@/components/shared/profileInfo';
import { useSession } from 'next-auth/react';
import { Button } from '@/components/core';
import { getTimeZone } from '@/utils';
import { getDictionaryClient } from '@/utils/getDictionaryClient';
import { Locale as LocalType } from '@/i18n.config';
import { useRouter } from 'next/navigation';
import { CURRENT_DOMAIN } from '@/constants';

type Gender = 'male' | 'female';
type Locale = 'HE' | 'EN';

type Props = {
    params: {
        lang: LocalType;
    };
};

const Page = ({ params }: Props) => {
    const { data: session } = useSession();
    const [newGender, setNewGender] = useState<Gender>();
    const [newLocale, setNewLocale] = useState<Locale>();
    const router = useRouter();

    const dict = getDictionaryClient(params.lang);
    const { profile } = dict.app;

    const timeZone: string = getTimeZone();

    const handleGenderChange = (e: any) => {
        setNewGender(e.target.value);
    };
    const handleLocaleChange = (e: any) => {
        setNewLocale(e.target.value);
    };

    const handleSubmit = async () => {
        try {
            // TODO: fix the session error
            const res = await fetch(
                //@ts-ignore
                `${CURRENT_DOMAIN}/api/auth/profile/${session?.user?.id}`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-type': 'application/json',
                    },
                    body: JSON.stringify({ newGender, newLocale }),
                },
            );
            if (!res.ok) {
                throw new Error('Failed to update');
            }
        } catch (error) {
            console.log(error);
        }
        router.push(`/${params.lang}`);
    };

    useEffect(() => {
        /**
         * update state according to the data base
         */
        async function fetchData() {
            try {
                // TODO: fix the session error
                const res = await fetch(
                    //@ts-ignore
                    `${CURRENT_DOMAIN}/api/auth/profile/${session?.user?.id}`,
                    {
                        method: 'GET',
                        headers: {
                            'Content-type': 'application/json',
                        },
                    },
                );
                if (!res.ok) {
                    throw new Error('Failed to fetch');
                }
                const data = await res.json();
                const dbGender = data.user.gender;
                const dbLocale = data.user.locale;
                setNewGender(dbGender);
                setNewLocale(dbLocale);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
        // TODO: fix the session error
        //@ts-ignore
    }, [session?.user?.id]);
    return (
        <div className='flex flex-col items-center justify-center h-full'>
            <Card
                color='primary'
                className='flex flex-col items-start p-4 gap-4'
                shadow='large'
                style={{ width: '400px' }}>
                <UserImage />
                <ProfileInfo
                    label={profile.gender}
                    inputType='select'
                    value={newGender}
                    options={[
                        profile.genderOptions.male,
                        profile.genderOptions.female,
                    ]}
                    onChange={handleGenderChange}
                />
                <ProfileInfo
                    label={profile.email}
                    inputType='text'
                    isDisabled={true}
                    value={session?.user?.email ?? ''}
                />
                <ProfileInfo
                    label={profile.locale}
                    value={newLocale}
                    inputType='select'
                    options={['HE', 'EN']}
                    onChange={handleLocaleChange}
                />
                <ProfileInfo
                    label={profile.timeZone}
                    inputType='text'
                    value={timeZone}
                />
                <Button
                    label={profile.submitButton}
                    onClick={handleSubmit}
                    size='medium'
                />
            </Card>
        </div>
    );
};

export default Page;
