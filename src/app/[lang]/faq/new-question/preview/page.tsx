'use client';

import { Locale } from '@/i18n.config';
import { Button, Link } from '@core';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

type Props = {
    params: {
        lang: Locale;
    };
};

const Page = ({ params: { lang } }: Props) => {
    const [currentQuestion, setCurrentQuestion] = useState('');
    const router = useRouter();

    const handleSubmitClick = () => {
        router.push(`/${lang}/faq`);
    };

    useEffect(() => {
        const currentQuestionLocalStorage =
            localStorage.getItem('currentQuestion');
        if (currentQuestionLocalStorage) {
            setCurrentQuestion(currentQuestionLocalStorage);
        }
    }, []);
    return (
        <div>
            <h1>Preview</h1>
            <p>{currentQuestion}</p>
            <Link url={`/${lang}/faq/new-question`} label='Back' />
            <Button onClick={handleSubmitClick} label='Submit' />
        </div>
    );
};

export default Page;
