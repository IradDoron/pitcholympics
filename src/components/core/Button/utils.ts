import { css } from '@emotion/css';
import { Theme } from '@mui/system';

export const getBaseStyles = (theme: Theme) => {
    return css`
        padding: 32px;
        background-color: ${theme.palette.primary.main};
        font-size: 24px;
        border-radius: 4px;
        &:hover {
            color: green;
        }
        &:active {
            color: red;
        }
    `;
};

export const getSize = (size: 'small' | 'medium' | 'large') => {
    switch (size) {
        case 'small':
            return css`
                padding: 16px;
            `;
        case 'medium':
            return css`
                padding: 24px;
            `;
        case 'large':
            return css`
                padding: 32px;
            `;
        default: // medium
            return css`
                padding: 24px;
            `;
    }
};

export const getBackground = (
    status: 'default' | 'clicked' | 'disabled',
    theme: Theme,
) => {
    switch (status) {
        case 'default':
            return css`
                background-color: ${theme.palette.primary.main};
            `;
        case 'clicked':
            return css`
                background-color: ${theme.palette.primary.dark};
            `;
        case 'disabled':
            return css`
                background-color: grey;
                cursor: not-allowed;
            `;
        default: // default
            return css`
                background-color: ${theme.palette.primary.main};
            `;
    }
};
