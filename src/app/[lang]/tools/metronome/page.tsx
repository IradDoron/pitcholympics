'use client'
import { Add, Remove } from '@mui/icons-material';
import { Box, Button, IconButton, Paper, Slider, TextField, Typography } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import drumstickSound from './beat/drumsticks.mp3';
import beatSound from './beat/beat.mp3';

const Page = () => {
    const [tempo, setTempo] = useState(150);
    const [metre, setMetre] = useState('4/4');
    const [strongBeat, setStrongBeat] = useState(2);
    const [currentBeat, setCurrentBeat] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const isMetreValid = useMemo(() => new RegExp(/^\d+\/[1-9]\d*$/g).test(metre), [metre]);
    const drumstickAudio = useMemo(() => new Audio(drumstickSound), [])
    const beatAudio = useMemo(() => new Audio(beatSound), [])

    const handleTempoChange = (_: Event, newValue: number | number[]) => {
        setTempo(newValue as number);
    };

    const increaseTempo = () => {
        setTempo(prevTempo => prevTempo >= 280 ? prevTempo : prevTempo + 1);
    };

    const decreaseTempo = () => {
        setTempo(prevTempo => prevTempo <= 20 ? prevTempo : prevTempo - 1);
    };

    const increaseStrongBeat = () => {
        setStrongBeat(prevStrongBeat => prevStrongBeat >= 10 ? prevStrongBeat : prevStrongBeat + 1);
    };

    const decreaseStrongBeat = () => {
        setStrongBeat(prevStrongBeat => prevStrongBeat <= 2 ? prevStrongBeat : prevStrongBeat - 1);
    };

    const handleMetreChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
        setMetre(value);
    };

    const handlePlayStop = () => {
        if (isMetreValid) {
            setIsPlaying(isPlaying => !isPlaying);
        }
    };

    useEffect(() => {
        if (!isMetreValid) {
            setIsPlaying(false);
        }
    }, [metre]);

    useEffect(() => {
        let intervalId: NodeJS.Timeout;
        let beat = 0;

        if (isPlaying) {
            const [numerator, denominator] = metre.split('/').map(Number);
            const beatDuration = 60000 / tempo;
            const intervalDuration = beatDuration * (numerator / denominator);

            intervalId = setInterval(() => {
                if (beat % strongBeat === 0) {
                    drumstickAudio.play();
                    drumstickAudio.currentTime = 0;
                } else {
                    beatAudio.play();
                    beatAudio.currentTime = 0;
                }

                setCurrentBeat(prevBeat => (prevBeat % strongBeat) + 1);
                beat++;
            }, intervalDuration);
        }

        return () => {
            clearInterval(intervalId);
            setCurrentBeat(0);
        };
    }, [isPlaying, tempo, strongBeat, metre]);


    return (
        <Box sx={{ height: 1, width: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Paper sx={{ p: 3, borderRadius: 2 }} elevation={3} >
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Slider disabled size='small' value={currentBeat} step={1} marks min={1} max={strongBeat}
                            sx={{
                                '&.Mui-disabled': { color: 'black' },
                                '& .MuiSlider-mark': {
                                    width: 4,
                                    height: 4,
                                    borderRadius: '50%',
                                    border: '1px solid',
                                    color: 'red'
                                },
                                '& .MuiSlider-thumb': { width: 16, height: 16, }
                            }}
                        />
                        <Box sx={{ display: 'flex', gap: 1, alignItems: 'baseline' }}>
                            <Typography sx={{ fontSize: 40 }}>{tempo}</Typography>
                            <Typography sx={{ fontSize: 20 }}>BPM</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 3, width: '400px' }}>
                            <IconButton onClick={decreaseTempo} sx={{ width: 50, height: 50, color: 'black', border: '0.5px solid gray' }}>
                                <Remove />
                            </IconButton>
                            <Slider value={tempo} onChange={handleTempoChange} min={20} max={280} />
                            <IconButton onClick={increaseTempo} sx={{ width: 50, height: 50, color: 'black', border: '0.5px solid gray' }}>
                                <Add />
                            </IconButton>
                        </Box>
                    </Box>
                    <TextField variant='standard' value={metre} onChange={handleMetreChange} autoComplete='off' sx={{ width: 60 }} placeholder='Metre'
                        InputProps={{ sx: { fontSize: 20 } }} inputProps={{ sx: { textAlign: 'center' } }} />
                    <Button
                        variant='contained'
                        onClick={handlePlayStop}
                        sx={{
                            width: 80, height: 80, fontSize: 20, borderRadius: '50%',
                            transition: 'box-shadow 0.3s ease-in-out',
                        }}
                        style={{ textTransform: 'none' }}
                    >
                        {isPlaying ? 'Stop' : 'Start'}
                    </Button>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                            <IconButton onClick={decreaseStrongBeat} sx={{ width: 50, height: 50, color: 'black', border: '0.5px solid gray' }}>
                                <Remove />
                            </IconButton>
                            <Typography sx={{ fontSize: 35 }}>{strongBeat}</Typography>
                            <IconButton onClick={increaseStrongBeat} sx={{ width: 50, height: 50, color: 'black', border: '0.5px solid gray' }}>
                                <Add />
                            </IconButton>
                        </Box>
                        <Typography sx={{ fontSize: 20 }}>Beats Per Measure</Typography>
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
};

export default Page;