"use client"
import React, { useState } from 'react';

type Matrix = string[][];
type Colors = { [key: string]: string };

const MemoBlockAmit = () => {
  const [matrix, setMatrix] = useState<Matrix>(() => {
    const rows = 8;
    const columns = 4;
    const letters = ['C', 'B', 'A', 'G', 'F', 'E', 'D', 'C'];

    const initialMatrix: Matrix = Array(rows)
      .fill([])
      .map(() => Array(columns).fill('transparent'));

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        initialMatrix[i][j] = letters[i % letters.length];
      }
    }
    return initialMatrix;

  });

  const colors: Colors = {
    C: 'bg-green-400',
    B: 'bg-yellow-400',
    A: 'bg-red-400',
    G: 'bg-purple-400',
    F: 'bg-blue-600',
    E: 'bg-blue-400',
    D: 'bg-green-600',
    '1': ''
  };

  const handleCellClick = (rowIndex: number, colIndex: number) => {
    // on click cell hear the sound
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div>
        {matrix.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-row">
            {row.map((value, colIndex) => (
              <div
                key={colIndex}
                className={`w-11 h-10 flex items-center justify-center rounded-3xl cursor-pointer ${colors[value]}`}
                onClick={() => handleCellClick(rowIndex, colIndex)}
              >
                {value}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemoBlockAmit;
