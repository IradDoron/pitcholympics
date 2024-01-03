'use client';

import { Button as BaseButton } from '@mui/base';
import { styled } from '@mui/system';

type Props = {
    label: string;
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-explicit-any
    onClick: (param: any) => void;
};

const StyledButton = styled(BaseButton)(({ theme }) => ({
    color: 'white',
    backgroundColor: theme.palette.primary.main,
    padding: '10px 20px',
    borderRadius: '5px',
}));

export const Button = ({ label, onClick }: Props) => {
    return <StyledButton onClick={onClick}>{label}</StyledButton>;
};
