'use client';

import { css } from '@emotion/css';
import { Button as BaseButton } from '@mui/base';
import { useButton } from '@mui/base/useButton';
import { useTheme } from '@mui/system';

type Props = {
    label?: string;
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-explicit-any
    onClick?: () => void;
    size?: 'small' | 'medium' | 'large';
};

export const Button = ({
    label = '',
    onClick = () => {},
    size = 'medium',
}: Props) => {
    const { getRootProps } = useButton();
    const theme = useTheme();
    const color = 'white';

    const getSize = (size: 'small' | 'medium' | 'large') => {
        switch (size) {
            case 'small':
                return 'padding: 32px;';
            case 'medium':
                return 'padding: 24px;';
            case 'large':
                return 'padding: 16px;';
            default:
                return 'padding: 24px;';
        }
    };

    return (
        <BaseButton
            {...getRootProps()}
            className={css`
                padding: 32px;
                background-color: ${theme.palette.primary.main};
                font-size: 24px;
                border-radius: 4px;
                position: relative;
                border-color: salmon;
                border-width: 4px;
                &:hover {
                    color: ${color};
                }
                &:active {
                    color: red;
                }
                ${getSize(size)}
            `}
            onClick={onClick}>
            {label}
        </BaseButton>
    );
};
