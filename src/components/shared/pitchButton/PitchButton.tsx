import React from 'react';
import * as Tone from 'tone';
type Props = {
  pitches: string[];
};

const PitchButton = ({ pitches }: Props) => {
  function convertNumberArrayToStringArray(arr: number[]) {
    return arr.map(num => num.toString());
  }

  function handleClick() {
    const synth = new Tone.PolySynth(Tone.Synth).toDestination();
    const now = Tone.now();
    pitches.forEach((pitch, index )=> {
      console.log(pitch);
      synth.triggerAttack(pitch.toString(), now + index/2);
    });
    synth.triggerRelease(pitches, now + pitches.length/2);
  }

  return (
    <div
      className="w-20 h-20 bg-lambada-light dark:bg-lambada-dark  text-white rounded-full mx-2 shadow-md hover:shadow-xl transform hover:scale-105 transition-transform duration-300 hover:bg-yellow-500 hover:text-white flex items-center justify-center"
      onClick={handleClick}>
    
    </div>
  );
};

export default PitchButton;
