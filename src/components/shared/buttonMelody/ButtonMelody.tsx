import { colorVariants } from '@/components/core/circleGradient/CircleGradient';
import { divideItemsByLightAndDark } from '@/utils/divideItemsByLightAndDark';
import { Dispatch, SetStateAction } from 'react';
import * as Tone from 'tone';
type Props = {
  noteId: number;
  setUserGuess: Dispatch<SetStateAction<number[]>>;
  currentNote: number;
  userGuess: number[];
  pitchOptions: string[];
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
};
const ButtonMelody = ({
  noteId,
  setUserGuess,
  currentNote,
  userGuess,
  pitchOptions,
  isActive,
  setIsActive

}: Props) => {
  const bgColorsArr = Object.values(colorVariants);

  const { light, dark } = divideItemsByLightAndDark(bgColorsArr);
  const synth = new Tone.PolySynth(Tone.Synth).toDestination();
  
console.log(pitchOptions)
//  if(currentNote === noteId) setIsActive(true)


  const clickHandler = () => {
    if (userGuess.length === currentNote) return;
    const newGuess = [...userGuess];
    console.log(noteId);
    newGuess.push(noteId);
    setUserGuess(newGuess);
   
      synth.triggerAttackRelease(pitchOptions[noteId -1], '4n')
  
   
  };

  return (
    !isActive ? (
      <div
        onClick={clickHandler}
        className={`w-24 h-24 rounded-full hover:shadow-2xl flex flex-row items-center justify-center ${
          light[noteId - 1]
        } dark:${dark[noteId - 1]} text-white text-center mt-[20px]`}
      >
        Number{noteId}
      </div>
    ) : (
      <div
      onClick={clickHandler}
      className={`w-24 h-24 rounded-full hover:shadow-2xl flex flex-row items-center justify-center ${
        light[noteId - 1]
      } dark:${dark[noteId - 1]} text-white text-center mt-[20px]  border-light-primary-main dark:border-dark-primary-main border-solid border-8`}
    >
      Number{noteId}
    </div>




    )
  );
};

export default ButtonMelody;
