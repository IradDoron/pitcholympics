import { cx } from '@emotion/css';
import { Card as MaterialCard } from '@mui/material';

type Props = {
    children?: React.ReactNode;
    onClick?: () => void;
    styles?: string;
};

export const Card = ({
    children = null,
    onClick = () => {},
    styles = '',
}: Props) => {
    return (
        <MaterialCard className={cx(styles)} onClick={onClick}>
            {children}
        </MaterialCard>
    );
};
