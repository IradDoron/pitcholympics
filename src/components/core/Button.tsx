import { Button as MaterialButton } from '@mui/material';
import { MouseEventHandler } from 'react';

type BtnSize = 'small' | 'medium' | 'large';

type Props = {
    label: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
    size?: BtnSize;
    state?: 'default' | 'disabled' | 'clicked';
    className?: string;
};

export const Button = ({
    label,
    onClick,
    size = 'medium',
    state = 'default',
    className = '',
}: Props) => {
    const getSize = (size: BtnSize) => {
        switch (size) {
            case 'small':
                return 'px-2 py-1 text-xs';
            case 'medium':
                return 'px-4 py-2 text-base';
            case 'large':
                return 'px-6 py-3 text-xl';
            default:
                return 'px-6 py-3 text-xl';
        }
    };

    const getColor = (state: 'default' | 'disabled' | 'clicked') => {
        switch (state) {
            case 'default':
                return 'bg-light-primary-main dark:bg-dark-primary-main text-light-primary-contrastText dark:text-dark-primary-contrastText';
            case 'disabled':
                return 'bg-grey-A00 dark:bg-grey-300 text-grey-100 dark:text-dark-background-onDefault cursor-not-allowed';
            case 'clicked':
                return 'bg-green-A00 dark:bg-green-300 text-light-primary-contrastText dark:text-dark-primary-contrastText';
            default:
                return 'bg-light-primary-main dark:bg-dark-primary-main text-light-primary-contrastText dark:text-dark-primary-contrastText';
        }
    };

    const buttonSize = getSize(size);
    const buttonColor = getColor(state);
    return (
        <button
            onClick={onClick}
            className={` shadow-large-light dark:shadow-large-dark rounded-[12px] ${buttonSize} ${buttonColor} ${className}`}>
            {label}
        </button>
    );
};
