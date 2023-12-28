'use client';

import { useSession } from 'next-auth/react';
import Image from 'next/image';

export const UserImage = () => {
    const { data: session } = useSession();

    if (session?.user) {
        return (
            <>
                <Image
                    className='m-0.5 inline-block rounded-full '
                    src={session.user.image ?? ''}
                    alt=''
                    width={64}
                    height={64}
                />
            </>
        );
    }
};
