'use client';

import { Locale } from '@/i18n.config';
import { getDictionaryClient } from '@utils';
import { useEffect, useState } from 'react';

type Props = { status: 'Success' | 'Failed'; lang: Locale };

export const Snackbar = ({ status, lang }: Props) => {
    const [show, setShow] = useState(true);
    const dict = getDictionaryClient(lang);
    const { snackbar } = dict.shared;

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {show && (
                <div className='w-25 mx-auto fixed-bottom mb-3 bg-secondary text-light'>
                    {snackbar[status][0]} ;
                    <span
                        className='bg-primary text-light'
                        onClick={() => setShow(false)}>
                        Continue
                    </span>
                </div>
            )}
        </div>
    );
};
