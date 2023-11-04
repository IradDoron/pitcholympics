import React from 'react';

type Props = {
  pitches: number[];

};

const PitchButton = ({ pitches }: Props) => {
  return (
    <div className="w-20 h-20 bg-lambada-light dark:bg-lambada-dark  text-white rounded-full mx-2 shadow-md hover:shadow-xl transform hover:scale-105 transition-transform duration-300 hover:bg-yellow-500 hover:text-white flex items-center justify-center">
      {pitches.map((pitch, index) => {
        return <p key={index}>{pitch}</p>;
      })}
    </div>
  );
};

export default PitchButton;
