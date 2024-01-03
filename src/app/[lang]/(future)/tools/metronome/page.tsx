'use client';

import { Center, Column } from '@/components/shared/Layout';
import { Paper } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import { Meter, MetronomeSlider, StopStartButton, StrongBeat, Tempo } from './_components';
import beatSound from '../../../../../../public/sounds/beat.mp3';
import drumstickSound from '../../../../../../public/sounds/drumsticks.mp3';

const Page = () => {
    const [tempo, setTempo] = useState(150);
    const [meter, setMeter] = useState('4/4');
    const [strongBeat, setStrongBeat] = useState(2);
    const [currentBeat, setCurrentBeat] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const isMeterValid = useMemo(
        () => new RegExp(/^\d+\/[1-9]\d*$/g).test(meter),
        [meter],
    );

    const [drumstickAudio, setDrumstickAudio] = useState<HTMLAudioElement | null>(null);
    const [beatAudio, setBeatAudio] = useState<HTMLAudioElement | null>(null);

    useEffect(() => {
        setDrumstickAudio(new window.Audio(drumstickSound))
        setBeatAudio(new window.Audio(beatSound))
    }, []);

    const changeTempo = (_: Event, newValue: number | number[]) => {
        setTempo(newValue as number);
    };

    const increaseTempo = () => {
        setTempo(prevTempo => (prevTempo >= 280 ? prevTempo : prevTempo + 1));
    };

    const decreaseTempo = () => {
        setTempo(prevTempo => (prevTempo <= 20 ? prevTempo : prevTempo - 1));
    };

    const increaseStrongBeat = () => {
        setStrongBeat(prevStrongBeat =>
            prevStrongBeat >= 10 ? prevStrongBeat : prevStrongBeat + 1,
        );
    };

    const decreaseStrongBeat = () => {
        setStrongBeat(prevStrongBeat =>
            prevStrongBeat <= 2 ? prevStrongBeat : prevStrongBeat - 1,
        );
    };

    const changeMeter = ({ target: { value }, }: React.ChangeEvent<HTMLInputElement>) => {
        setMeter(value);
    };

    const handlePlayStop = () => {
        if (isMeterValid) {
            setIsPlaying(isPlaying => !isPlaying);
        }
    };

    useEffect(() => {
        if (!isMeterValid) {
            setIsPlaying(false);
        }
    }, [meter]);

    useEffect(() => {
        let intervalId: NodeJS.Timeout;
        let beat = 0;

        if (isPlaying) {
            const [numerator, denominator] = meter.split('/').map(Number);
            const beatDuration = 60000 / tempo;
            const intervalDuration = beatDuration * (numerator / denominator);

            intervalId = setInterval(() => {
                if (drumstickAudio && beatAudio) {
                    if (beat % strongBeat === 0) {
                        drumstickAudio.play();
                        drumstickAudio.currentTime = 0;
                    } else {
                        beatAudio.play();
                        beatAudio.currentTime = 0;
                    }
                }

                setCurrentBeat(prevBeat => (prevBeat % strongBeat) + 1);
                beat++;
            }, intervalDuration);
        }

        return () => {
            clearInterval(intervalId);
            setCurrentBeat(0);
        };
    }, [isPlaying, tempo, strongBeat, meter]);

    return (
        <Center sx={{ height: 1, width: 1 }}>
            <Paper sx={{ p: 3, borderRadius: 2 }} elevation={3}>
                <Column sx={{ alignItems: 'center', gap: 2 }}>
                    <Column sx={{ alignItems: 'center' }}>
                        <MetronomeSlider currentBeat={currentBeat} strongBeat={strongBeat} />
                        <Tempo tempo={tempo} decreaseTempo={decreaseTempo}
                            changeTempo={changeTempo} increaseTempo={increaseTempo} />
                    </Column>
                    <Meter meter={meter} changemeter={changeMeter} />
                    <StopStartButton handlePlayStop={handlePlayStop} isPlaying={isPlaying} />
                    <StrongBeat strongBeat={strongBeat} decreaseStrongBeat={decreaseStrongBeat} increaseStrongBeat={increaseStrongBeat} />
                </Column>
            </Paper>
        </Center>
    );
};

export default Page;