'use client';

import { useState } from 'react';

type Props = {
    content: React.ReactNode;
    trigger: React.ReactNode;
};

export const Menubar = ({ content, trigger }: Props) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleTriggerClick = () => {
        setIsOpen(!isOpen);
    };

    const handleContentClick = () => {
        setIsOpen(false);
    };

    const handleBlur = () => {
        setTimeout(() => {
            setIsOpen(false);
        }, 100);
    };

    return (
        <button
            className='relative flex justify-center items-center'
            onBlur={handleBlur}>
            <div
                className='cursor-pointer p-2 mx-3 w-8 h-12'
                onClick={handleTriggerClick}>
                {trigger}
            </div>
            <div
                className={`absolute ${
                    isOpen ? 'block' : 'hidden'
                } bg-light-surface-primary dark:bg-dark-surface-primary text-light-surface-onPrimary dark:text-dark-surface-onPrimary absolute top-9 mt-3 min-w-[120px] rounded border py-2`}
                onClick={handleContentClick}>
                {content}
            </div>
        </button>
    );
};
