import React from 'react'
import Card from '@/components/core/card'
import UserImage from '@/components/shared/userImage'

const page = () => {

    return (
        <div className='flex items-center justify-center h-full'>
            <Card color='primary' className='flex flex-col' shadow='large' style={{ width: '330px' }}>
                <UserImage />

            </Card>

        </div>
    )
}

export default page