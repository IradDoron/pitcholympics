'use client';

import { css, cx } from '@emotion/css';
import { Button as BaseButton } from '@mui/base';
import { useButton } from '@mui/base/useButton';
import { useTheme } from '@mui/system';
import * as utils from './utils';

type Props = {
    label?: string;
    onClick?: () => void;
    size?: 'small' | 'medium' | 'large';
    status?: 'default' | 'clicked' | 'disabled';
    styles?: string;
};

export const Button = ({
    label = '',
    onClick = () => {},
    size = 'medium',
    styles = '',
    status = 'default',
}: Props) => {
    const { getRootProps } = useButton();
    const theme = useTheme();
    const rootProps = getRootProps();

    return (
        <BaseButton
            {...rootProps}
            className={cx(
                utils.getBaseStyles(theme),
                utils.getSize(size),
                utils.getBackground(status, theme),
                css`
                    ${styles}
                `,
            )}
            onClick={onClick}>
            {label}
        </BaseButton>
    );
};
