'use client';

import { useTheme } from '@/context/ThemeProvider';
import Image from 'next/image';
import { VMark, XMark } from '@icons';

type Props = {
    status: 'passed' | 'failed' | 'locked' | 'pending';
};

const StatusIcon = ({ status }: Props) => {
    const { mode } = useTheme();

    const getIconComponent = () => {
        switch (status) {
            case 'passed': {
                return <VMark size='small' />;
            }
            case 'failed': {
                return <XMark size='small' />;
            }
            case 'pending': {
                return <XMark size='small' />; //pending
            }
            default: {
                return null;
            }
        }
    };

    const Icon = getIconComponent();

    const getBgColor = () => {
        switch (status) {
            case 'passed': {
                return 'bg-green-900 dark:bg-green-500';
            }
            case 'failed': {
                return 'bg-red-800 dark:bg-red-500';
            }
            case 'pending': {
                return 'bg-grey-400 dark:bg-grey-200';
            }
            default: {
                return '';
            }
        }
    };

    return (
        <div
            className={`w-[26px] h-[26px] border-[3px] border-light-primary-main dark:border-dark-primary-main rounded-[50%] absolute -top-2 -right-1 ${getBgColor()}`}>
            {Icon}
        </div>
    );
};

export default StatusIcon;
