import React from 'react';
import { colorVariants } from '@/components/core/circleGradient/CircleGradient';
import { divideItemsByLightAndDark } from '@/utils/divideItemsByLightAndDark';

import * as Tone from 'tone';
type Props = {
  pitches: number[][];
  useChoiceIndex: number | null;
  setChoiceIndex: React.Dispatch<React.SetStateAction<number | null>>;
};

const UserOptions = ({ pitches, useChoiceIndex, setChoiceIndex }: Props) => {
  function convertNumberArrayToStringArray(arr: number[]) {
    return arr.map(num => num.toString());
  }
  function handleChoiceClick(index: number) {
    const synth = new Tone.PolySynth(Tone.Synth).toDestination();

    const now = Tone.now();

    pitches[index].forEach((pitch, index) => {
      synth.triggerAttack(pitch.toString(), now + index / 2);
    });
    synth.triggerRelease(
      convertNumberArrayToStringArray(pitches[index]),
      now + pitches.length / 4
    );

    setChoiceIndex(index);
  }
  const bgColorsArr = Object.values(colorVariants);

  const { light, dark } = divideItemsByLightAndDark(bgColorsArr);

  const getStyles = (
    index: number,
    darkBgArr: string[],
    lightBgArr: string[],
    isSelected: boolean
  ) => {
    if (isSelected) {
      return `w-20 h-20 ${lightBgArr[index]} dark:${darkBgArr[index]} text-white rounded-full mx-2 shadow-sm hover:shadow-md transform hover:scale-202 transition-transform duration-600 border-light-primary-main dark:border-dark-primary-main border-solid border-8`;
    }

    return `w-20 h-20 ${lightBgArr[index]} dark:${darkBgArr[index]} text-white rounded-full mx-2 shadow-sm `;
  };

  return (
    <div className="w-full h-fit mx-auto  flex items-center justify-center">
      {pitches.map((pitch, index) => {
        const styles = getStyles(index, dark, light, index === useChoiceIndex);
        return (
          <div
            key={index}
            onClick={() => handleChoiceClick(index)}
            className={styles}></div>
        );
      })}
    </div>
  );
};

export default UserOptions;
