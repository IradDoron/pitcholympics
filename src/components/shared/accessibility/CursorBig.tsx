import { SunIcon } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import CursorBigIcon from '@/components/icons/CursorBig';

type Props = {
    x: number;
    y: number;
    event: MouseEvent;
};

const CursorBig = () => {
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

export default CursorBig;
