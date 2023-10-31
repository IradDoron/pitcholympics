import React from 'react';

type Props = {
  pitches: number[] | number[][];
  useChoiceIndex: number | null;
  setChoiceIndex: React.Dispatch<React.SetStateAction<number | null>>;

};

const UserOptions = ({ pitches, useChoiceIndex, setChoiceIndex }: Props) => {
  function handleChoiceClick(index: number) {
    setChoiceIndex(index);
    console.log('index', index);
  }
  

  return (
    <div className="w-full h-fit mx-auto  flex items-center justify-center">
      {pitches.map((pitch, index) => (
        <div
          key={index}
          onClick={() => handleChoiceClick(index)}
          className="w-20 h-20 bg-gradient-to-r from-purple-400 to-indigo-400 text-white rounded-full mx-2 shadow-sm hover:shadow-md transform hover:scale-202 transition-transform duration-600 hover:bg-indigo-500 hover:text-white flex items-center justify-center duration-300  hover:scale-105">
          {pitch}
        </div>
      ))}
    </div>
  );
};

export default UserOptions;
