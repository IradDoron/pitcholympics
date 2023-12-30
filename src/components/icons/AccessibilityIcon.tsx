'use client';

import { ICON_COLORS, ICON_SIZES } from '@constants';
import { IconProps } from '@types';
import { motion } from 'framer-motion';

export const AccessibilityIcon = ({
    color = 'primary',
    size = 'medium',
    className = '',
    onClick,
    exit,
}: IconProps) => {
    return (
        <motion.svg
            width='24'
            height='24'
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
                opacity: 1,
                scale: 1,
                transition: { duration: 0.7, delay: 0.7 },
            }}
            transition={{ duration: 0.5 }}
            exit={{
                scale: 0,
                opacity: 0,
                transition: { duration: 0.6, delay: 0.5 },
            }}
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            className={`absolute left-10 z-50 ${ICON_COLORS[color]} ${ICON_SIZES[size]}  ${className}`}
            onClick={onClick}>
            <path
                d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
                fill='#f27d52'
            />
            <path
                d='M7 9L12 10M17 9L12 10M12 10V13M12 13L10 18M12 13L14 18'
                stroke='#FFF'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M12 7C11.7239 7 11.5 6.77614 11.5 6.5C11.5 6.22386 11.7239 6 12 6C12.2761 6 12.5 6.22386 12.5 6.5C12.5 6.77614 12.2761 7 12 7Z'
                fill='#FFF'
                stroke='#FFF'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </motion.svg>
    );
};

export default AccessibilityIcon;
