'use client';

import React, { useState } from 'react';
import Card from '@/components/core/card';
import UserImage from '@/components/shared/userImage';
import ProfileInfo from '@/components/shared/profileInfo';
import { useSession } from 'next-auth/react';
import { getDictionaryClient } from '@/utils/getDictionaryClient';
import { Locale as LocalType } from '@/i18n.config';

type Gender = 'male' | 'female';
type Locale = 'HE' | 'EN';

type Props = {
    params: {
        lang: LocalType;
    };
};

const Page = ({ params }: Props) => {
    const { data: session } = useSession();
    const [gender, setGender] = useState<Gender>('male');
    const [locale, setLocale] = useState<Locale>('EN');

    const dict = getDictionaryClient(params.lang);
    const { profile } = dict.app;

    const getTimeZone = (): string => {
        return /\((.*)\)/.exec(new Date().toString())![1];
    };

    const timeZone: string = getTimeZone();

    const handleGenderChange = (e: any) => {
        setGender(e.target.value);
    };
    // TODO: fix the first choice not to be "male"
    const handleLocaleChange = (e: any) => {
        setLocale(e.target.value);
    };

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
                    inputType='select'
                    options={['HE', 'EN']}
                    onChange={handleLocaleChange}
                />
                <ProfileInfo
                    label={profile.timeZone}
                    inputType='text'
                    value={timeZone}
                />
            </Card>
        </div>
    );
};

export default Page;
