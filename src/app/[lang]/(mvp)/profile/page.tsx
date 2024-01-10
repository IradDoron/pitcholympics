'use client';

import { Locale as LocalType } from '@/i18n.config';
import { Button, Card } from '@core';
import { css } from '@emotion/css';
import { UserImage } from '@shared';
import { getDictionaryClient } from '@utils';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ProfileInfo } from './_components';

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
    const { lang } = params;

    const dict = getDictionaryClient(lang);

    const { profile } = dict.app;

    const handleGenderChange = (e: any) => {
        setNewGender(e.target.value);
    };
    const handleLocaleChange = (e: any) => {
        setNewLocale(e.target.value);
    };

    const handleSubmit = async () => {
        try {
            // TODO: fix the session error
            //@ts-ignore
            const endpoint = `/api/users/${session?.user?.id}`;
            const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ newGender, newLocale }),
            };
            const res = await fetch(endpoint, requestOptions);

            if (!res.ok) {
                throw new Error('Failed to update');
            }
        } catch (error) {
            console.log(error);
        }
        router.push(`/${params.lang}`);
    };

    async function setIntialState() {
        try {
            // Removed the unused '@ts-expect-error' directive
            const endpoint = `/api/users/${session?.user?.id}`;
            const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            };
            const res = await fetch(endpoint, requestOptions);
            if (!res.ok) {
                throw new Error('Failed to fetch');
            }
            const data = await res.json();
            const dbGender = data.user.gender;
            const dbLocale = data.user.locale;
            setNewGender(dbGender);
            setNewLocale(dbLocale);
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log(error);
        }
    }

    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    useEffect(() => {
        setIntialState();
        //@ts-ignore
    }, [session?.user?.id]);

    return (
        <div className='flex flex-col items-center justify-center h-full'>
            <Card
                styles={css`
                    display: flex;
                    padding: 1rem;
                    flex-direction: column;
                    gap: 1rem;
                    align-items: flex-start;
                    width: 400px;
                `}>
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
