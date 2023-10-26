import React from 'react';

type Props = {
  pitches: number[];
};

const PitchButton = ({ pitches }: Props) => {
  return (
    <div className="w-32 h-32 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white rounded-full mx-2 shadow-md hover:shadow-xl transform hover:scale-105 transition-transform duration-300 hover:bg-yellow-500 hover:text-white flex items-center justify-center">
      {pitches.map((pitch, index) => {
        return <p key={index}>{pitch}</p>;
      })}
    </div>
  );
};

export default PitchButton;
