'use client';

import { Button } from '@core';
import { useState } from 'react';

const Page = () => {
    const [currentQuestion, setCurrentQuestion] = useState('');

    const handleQuestionChange = (
        event: React.ChangeEvent<HTMLTextAreaElement>,
    ) => {
        setCurrentQuestion(event.target.value);
    };

    const handleSubmitClick = () => {
        console.log(currentQuestion);
    };

    return (
        <div>
            <h1>Q&A</h1>
            <textarea
                placeholder='Ask a question'
                onChange={handleQuestionChange}
                value={currentQuestion}
            />
            <Button label='Submit' onClick={handleSubmitClick} />
        </div>
    );
};

export default Page;
