'use client';

import React, { useState } from 'react';
import Card from '@/components/core/card';
import UserImage from '@/components/shared/userImage';
import ProfileInfo from '@/components/shared/profileInfo';
import { useSession } from 'next-auth/react';

type Gender = 'male' | 'female';
type Locale = 'HE' | 'EN';

const Page = () => {
    const { data: session } = useSession();
    const [gender, setGender] = useState<Gender>('male');
    const [locale, setLocale] = useState<Locale>('EN');
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
                    label='Gender'
                    inputType='select'
                    options={['male', 'female']}
                    onChange={handleGenderChange}
                />
                <ProfileInfo
                    label='Email'
                    inputType='text'
                    isDisabled={true}
                    value={session?.user?.email ?? ''}
                />
                <ProfileInfo
                    label='Locale'
                    inputType='select'
                    options={['HE', 'EN']}
                    onChange={handleLocaleChange}
                />
                <ProfileInfo
                    label='TimeZone'
                    inputType='text'
                    value={timeZone}
                />
            </Card>
        </div>
    );
};

export default Page;
