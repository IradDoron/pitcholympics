import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AccessibilityIcon } from '@/components/icons';
import { Button } from '@/components/core';
import CursorBig from './CursorBig';

export const Accesibility = () => {
    const [isAccessability, setIsAccessibility] = useState(false);
    const [isBigCursor, setIsBigCursor] = useState(false);

    const accessebilityUiOn = () => {
        setIsAccessibility(true);
    };

    const accessebilityUiOff = () => {
        setIsAccessibility(false);
    };

    const cursorHandler = () => {
        const currrentCursorMode = localStorage.getItem('isBigCursor');
        if (currrentCursorMode === 'true') {
            localStorage.setItem('isBigCursor', 'false');
            setIsBigCursor(false);
        } else if (
            currrentCursorMode !== null ||
            currrentCursorMode !== undefined ||
            currrentCursorMode === 'false'
        ) {
            localStorage.setItem('isBigCursor', 'true');
            setIsBigCursor(true);
        }
    };

    useEffect(() => {
        const temp = localStorage.getItem('isBigCursor');
        temp === 'true' ? setIsBigCursor(true) : setIsBigCursor(false);
    }, []);

    return (
        <>
            {isBigCursor === true && <CursorBig />}
            <AnimatePresence>
                {!isAccessability ? (
                    <AccessibilityIcon
                        onClick={accessebilityUiOn}
                        color='primary'
                        size='Xlarge'
                        isActive={isAccessability}
                        className='top-20'
                    />
                ) : (
                    ''
                )}
            </AnimatePresence>
            <motion.div
                className='absolute flex flex-col p-10 gap-5 z-50 left-0  h-full bg-slate-500'
                initial={{ x: -180 }}
                animate={isAccessability ? { x: 0 } : { x: -180 }}
                transition={{
                    type: 'spring',
                    damping: 30,
                    delay: 0.5,
                    duration: 1,
                }}>
                <span
                    onClick={accessebilityUiOff}
                    className='text-2xl absolute right-0'>
                    x
                </span>
                <Button onClick={cursorHandler} label='Cursor' />
            </motion.div>
        </>
    );
};

export default Accesibility;
