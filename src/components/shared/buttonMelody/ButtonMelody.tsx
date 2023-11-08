import { colorVariants } from '@/components/core/circleGradient/CircleGradient';
import { divideItemsByLightAndDark } from '@/utils/divideItemsByLightAndDark';
import { Dispatch, SetStateAction } from 'react';

type Props = {
  noteId: number;
  setUserGuess: Dispatch<SetStateAction<number[]>>;
  currentNote: number;
  userGuess: number[];
};
const ButtonMelody = ({
  noteId,
  setUserGuess,
  currentNote,
  userGuess,
}: Props) => {
  const bgColorsArr = Object.values(colorVariants);

  const { light, dark } = divideItemsByLightAndDark(bgColorsArr);

  const clickHandler = () => {
    if (userGuess.length === currentNote) return;
    const newGuess = [...userGuess];
    newGuess.push(noteId);
    setUserGuess(newGuess);
  };

  return (
    noteId && (
      <div
        onClick={clickHandler}
        className={`w-24 h-24 rounded-full hover:shadow-2xl flex flex-row items-center justify-center ${
          light[noteId - 1]
        } dark:${dark[noteId - 1]} text-white text-center mt-[20px]`}>
        Number{noteId}
      </div>
    )
  );
};

export default ButtonMelody;
