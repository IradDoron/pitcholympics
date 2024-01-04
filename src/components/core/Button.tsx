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
    status?: 'default' | 'clicked' | 'disabled';
    cssStyles?: string;
};

export const Button = ({
    label = '',
    onClick = () => {},
    size = 'medium',
    cssStyles = '',
    status = 'default',
}: Props) => {
    const { getRootProps } = useButton();
    const theme = useTheme();
    const color = 'white';

    const getSize = (size: 'small' | 'medium' | 'large') => {
        switch (size) {
            case 'small':
                return 'padding: 16px;';
            case 'medium':
                return 'padding: 24px;';
            case 'large':
                return 'padding: 32px;';
            default:
                return 'padding: 24px;'; // medium
        }
    };

    const getBackgroundColor = (status: 'default' | 'clicked' | 'disabled') => {
        switch (status) {
            case 'default':
                return theme.palette.primary.main;
            case 'clicked':
                return theme.palette.primary.light;
            case 'disabled':
                return theme.palette.primary.light;
            default:
                return theme.palette.primary.main; // default
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
                &:hover {
                    color: ${color};
                }
                &:active {
                    color: red;
                }
                ${getSize(size)}
                ${getBackgroundColor(status)}
                ${cssStyles}
            `}
            onClick={onClick}>
            {label}
        </BaseButton>
    );
};
