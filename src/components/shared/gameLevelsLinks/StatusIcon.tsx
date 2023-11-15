'use client';

import { useTheme } from '@/context/ThemeProvider';
import Image from 'next/image';

type Props = {
    status: 'passed' | 'failed' | 'locked';
};

const StatusIcon = ({ status }: Props) => {
    const { mode } = useTheme();

    const getIconComponent = () => {
        switch (status) {
            case 'passed': {
                return (
                    <Image
                        src={`/assets/icons/v-mark-${mode}.svg`}
                        alt='passed'
                        width={20}
                        height={20}
                    />
                );
            }
            case 'failed': {
                return (
                    <Image
                        src={`/assets/icons/x-mark-${mode}.svg`}
                        alt='passed'
                        width={20}
                        height={20}
                    />
                );
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
