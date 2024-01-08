import { Slider } from '@mui/material';

interface MetronomeSliderProps {
    currentBeat: number;
    strongBeat: number;
}

export const MetronomeSlider = ({ currentBeat, strongBeat }: MetronomeSliderProps) => (
    <Slider
        disabled
        size='small'
        value={currentBeat}
        step={1}
        marks
        min={1}
        max={strongBeat}
        sx={{
            '&.Mui-disabled': { color: 'black' },
            '& .MuiSlider-mark': {
                width: 4,
                height: 4,
                borderRadius: '50%',
                border: '1px solid',
                color: 'red',
            },
            '& .MuiSlider-thumb': { width: 16, height: 16 },
        }} />
);