import React from 'react';
import * as Tone from 'tone';

type Props = {
    pitches: string[];
    playCount: number;
    setPlayCount: React.Dispatch<React.SetStateAction<number>>;
};

const PitchButton = ({ pitches, playCount, setPlayCount }: Props) => {
    function handleClick() {
        if (playCount > 2) return;
        const synth = new Tone.PolySynth(Tone.Synth).toDestination();
        const now = Tone.now();
        pitches.forEach((pitch, index) => {
            synth.triggerAttack(pitch.toString(), now + index / 2);
        });
        synth.triggerRelease(pitches, now + pitches.length / 2);
        setPlayCount(prev => prev + 1);
    }

    return (
        <div
            className='w-20 h-20 bg-lambada-light dark:bg-lambada-dark  text-white rounded-full mx-2 shadow-md hover:shadow-xl transform hover:scale-105 transition-transform duration-300 hover:bg-yellow-500 hover:text-white flex items-center justify-center'
            onClick={handleClick}></div>
    );
};

export default PitchButton;
