import { Center, Row } from '@/components/shared/Layout';
import { Add, Remove } from '@mui/icons-material';
import { IconButton, Slider, Typography } from '@mui/material';

interface TempoProps {
    tempo: number
    decreaseTempo: () => void
    changeTempo: (_: Event, newValue: number | number[]) => void
    increaseTempo: () => void
}

export const Tempo = ({ tempo, decreaseTempo, changeTempo, increaseTempo }: TempoProps) => (
    <>
        <Row
            sx={{
                gap: 1,
                alignItems: 'baseline',
            }}>
            <Typography sx={{ fontSize: 40 }}>
                {tempo}
            </Typography>
            <Typography sx={{ fontSize: 20 }}>BPM</Typography>
        </Row>
        <Center
            sx={{
                gap: 3,
                width: '400px',
            }}>
            <IconButton
                onClick={decreaseTempo}
                sx={{
                    width: 50,
                    height: 50,
                    color: 'black',
                    border: '0.5px solid gray',
                }}>
                <Remove />
            </IconButton>
            <Slider
                value={tempo}
                onChange={changeTempo}
                min={20}
                max={280} />
            <IconButton
                onClick={increaseTempo}
                sx={{
                    width: 50,
                    height: 50,
                    color: 'black',
                    border: '0.5px solid gray',
                }}>
                <Add />
            </IconButton>
        </Center>
    </>
);