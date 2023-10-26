import React from 'react';

type Props = {
  pitches: number[];
};

const UserOptions = ({ pitches }: Props) => {
  return (
    <div className="w-full h-fit mx-auto  flex items-center justify-center border-t border-r border-1">
      {pitches.map((pitch,index) => (
        <div key={index} className="w-20 h-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full mx-2 shadow-md hover:shadow-xl transform hover:scale-105 transition-transform duration-300 hover:bg-indigo-700 hover:text-white flex items-center justify-center">
          {pitch}
        </div>
      ))}
    </div>
  );
};

export default UserOptions;
