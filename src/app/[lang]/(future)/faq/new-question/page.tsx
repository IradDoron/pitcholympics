'use client';

import { Locale } from '@/i18n.config';
import { Link } from '@core';
import { useEffect, useState } from 'react';

type Props = {
    params: {
        lang: Locale;
    };
};
const Page = ({ params: { lang } }: Props) => {
    const [currentQuestion, setCurrentQuestion] = useState('');

    const handleQuestionInputChange = (
        e: React.ChangeEvent<HTMLTextAreaElement>,
    ) => {
        const newValue = e.target.value;
        setCurrentQuestion(newValue);
        localStorage.setItem('currentQuestion', newValue);
    };

    useEffect(() => {
        const currentQuestionLocalStorage =
            localStorage.getItem('currentQuestion');
        if (currentQuestionLocalStorage) {
            setCurrentQuestion(currentQuestionLocalStorage);
        } else {
            localStorage.setItem('currentQuestion', currentQuestion);
        }
    }, []);

    return (
        <div>
            <h1>New question</h1>
            <textarea
                className='w-full h-64 border'
                placeholder='Ask a question...'
                onChange={handleQuestionInputChange}
                value={currentQuestion}
            />
            <Link url={`/${lang}/faq/new-question/preview`} label='Preview' />
            <Link url={`/${lang}/faq`} label='Back' />
        </div>
    );
};

export default Page;
