import { colorVariants } from '@/components/core/CircleGradient';
import { divideItemsByLightAndDark } from '@/utils/divideItemsByLightAndDark';
import { Dispatch, SetStateAction, useEffect } from 'react';
import * as Tone from 'tone';

const playNote = (pitch: string) => {
    const synth = new Tone.PolySynth(Tone.Synth).toDestination();
    synth.triggerAttackRelease(pitch, '4n');
};

const handleUserGuessClick = (
    setUserGuess: Dispatch<SetStateAction<number[]>>,
    userGuess: number[],
    newPitchIndexGuess: number,
) => {
    const newGuess = [...userGuess];
    newGuess.push(newPitchIndexGuess);
    setUserGuess(newGuess);
};

type Props = {
    isPlaying: boolean; // If the button is playing play the button pitch
    pitch: string; // Which pitch to play
    isUserTurn: boolean; // If it's the user turn to play
    pitchOptionIndex: number; // The index of the pitch in the pitch options array (from the memo the melo game data)
    setUserGuess: Dispatch<SetStateAction<number[]>>; // If it's the user turn to play, add the pitchOptionIndex to the user guess array
    userGuess: number[]; // The user guess array
    setPitchIndexPlaying: Dispatch<SetStateAction<number>>; // Set the pitch index that is currently playing
};
const ButtonMelody = ({
    isPlaying,
    pitch,
    isUserTurn,
    pitchOptionIndex,
    setUserGuess,
    userGuess,
    setPitchIndexPlaying,
}: Props) => {
    const bgColorsArr = Object.values(colorVariants);
    const { light, dark } = divideItemsByLightAndDark(bgColorsArr);

    useEffect(() => {
        if (isPlaying) {
            playNote(pitch);
        }
    }, [isPlaying, pitch]);

    const handleButtonMelodyClick = () => {
        if (!isUserTurn) return;
        playNote(pitch);
        handleUserGuessClick(setUserGuess, userGuess, pitchOptionIndex);
        setPitchIndexPlaying(pitchOptionIndex);
    };

    return isPlaying ? (
        <div
            onClick={handleButtonMelodyClick}
            className={`w-24 h-24 rounded-full hover:shadow-2xl flex flex-row items-center justify-center ${light[pitchOptionIndex]} dark:${dark[pitchOptionIndex]} text-white text-center mt-[20px]  border-light-primary-main dark:border-dark-primary-main border-solid border-8`}></div>
    ) : (
        <div
            onClick={handleButtonMelodyClick}
            className={`w-24 h-24 rounded-full hover:shadow-2xl flex flex-row items-center justify-center ${light[pitchOptionIndex]} dark:${dark[pitchOptionIndex]} text-white text-center mt-[20px]`}></div>
    );
};

export default ButtonMelody;
