import { Column, Row } from '@/components/shared/Layout';
import { Add, Remove } from '@mui/icons-material';
import { IconButton, SxProps, Typography } from '@mui/material';

interface StrongBeatProps {
    strongBeat: number
    decreaseStrongBeat: () => void
    increaseStrongBeat: () => void
}

const buttonSx: SxProps = {
    width: 50,
    height: 50,
    color: 'black',
    border: '0.5px solid gray'
};

export const StrongBeat = ({ decreaseStrongBeat, strongBeat, increaseStrongBeat }: StrongBeatProps) => (
    <Column sx={{ alignItems: 'center', gap: 1 }}>
        <Row sx={{ alignItems: 'center', gap: 3 }}>
            <IconButton onClick={decreaseStrongBeat} sx={buttonSx}>
                <Remove />
            </IconButton>
            <Typography sx={{ fontSize: 35 }}>
                {strongBeat}
            </Typography>
            <IconButton onClick={increaseStrongBeat} sx={buttonSx}>
                <Add />
            </IconButton>
        </Row>
        <Typography sx={{ fontSize: 20 }}>
            Beats Per Measure
        </Typography>
    </Column >
);