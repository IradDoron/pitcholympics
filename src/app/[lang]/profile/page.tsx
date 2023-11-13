"use client"

import React, { useEffect, useState } from 'react'
import Card from '@/components/core/card'
import UserImage from '@/components/shared/userImage'
import ProfileInfo from '@/components/shared/profileInfo'
import { useSession } from 'next-auth/react'
import Button from '@/components/core/button'
import { getTimeZone } from '@/utils'

type Gender = 'male' | 'female';
type Locale = 'HE' | 'EN';

const Page = () => {
    const { data: session } = useSession()
    const [newGender, setNewGender] = useState<Gender>()
    const [newLocale, setNewLocale] = useState<Locale>()

    const timeZone: string = getTimeZone();

    const handleGenderChange = (e: any) => {
        setNewGender(e.target.value)
    }
    const handleLocaleChange = (e: any) => {
        setNewLocale(e.target.value)
    }

    const handleSubmit = async () => {
        try {
            const res = await fetch(`http://localhost:3000/api/auth/profile/${session?.user?.id}`, {
                method: 'PUT',
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ newGender, newLocale })
            });

            if (!res.ok) {
                throw new Error("Failed to update")
            }
        } catch (error) {
            console.log(error)

        }
    }

    useEffect(() => {
        /**
         * update state according to the data base 
         */
        async function fetchData() {
            try {
                const res = await fetch(`http://localhost:3000/api/auth/profile/${session?.user?.id}`, {
                    method: 'GET',
                    headers: {
                        "Content-type": "application/json",
                    },

                });
                if (!res.ok) {
                    throw new Error("Failed to fetch")
                }
                const data = await res.json()
                const dbGender = data.user.gender
                const dbLocale = data.user.locale
                setNewGender(dbGender)
                setNewLocale(dbLocale)
            } catch (error) {
                console.log(error)

            }

        }
        fetchData()
    }, [session?.user?.id])
    return (
        <div className='flex flex-col items-center justify-center h-full'>
            <Card color='primary' className='flex flex-col items-start p-4 gap-4' shadow='large' style={{ width: '400px' }}>
                <UserImage />
                <ProfileInfo label='Gender' inputType='select' value={newGender} options={['female', 'male']} onChange={handleGenderChange} />
                <ProfileInfo label='Email' inputType='text' isDisabled={true} value={session?.user?.email ?? ''} />
                <ProfileInfo label='Locale' value={newLocale} inputType='select' options={['HE', 'EN']} onChange={handleLocaleChange} />
                <ProfileInfo label='TimeZone' inputType='text' value={timeZone} />
                <Button label='click here to save' onClick={handleSubmit} size='small' />
            </Card>
        </div>
    )
}

export default Page