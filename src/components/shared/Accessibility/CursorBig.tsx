import CursorBigIcon from '@/components/icons/CursorBig';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const CursorBig = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const mouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', mouseMove);

        return () => {
            window.removeEventListener('mousemove', mouseMove);
        };
    }, []);

    return (
        <motion.div
            className='z-[100] pointer-events-none'
            animate={{
                x: mousePosition.x,
                y: mousePosition.y,
            }}
            transition={{
                stiffness: 500,
                type: 'keyframes',
                duration: 0,
            }}>
            <CursorBigIcon />
        </motion.div>
    );
};
