import { Button } from '@mui/material';

interface StopStartButtonProps {
    isPlaying: boolean
    handlePlayStop: () => void
}

export const StopStartButton = ({ handlePlayStop, isPlaying }: StopStartButtonProps) => (
    <Button
        variant='contained'
        onClick={handlePlayStop}
        sx={{
            width: 80,
            height: 80,
            fontSize: 20,
            borderRadius: '50%',
            transition: 'box-shadow 0.3s ease-in-out',
        }}
        style={{ textTransform: 'none' }}>
        {isPlaying ? 'Stop' : 'Start'}
    </Button>
);