"use client"
import React, { useState } from 'react';
import type { Colors, Matrix } from '@/types';
import { colorsTemplateMatrix } from '@/constants';

/**
 * Mirror the matrix (flip it vertically - up to down)
 * @param matrix  - the matrix to mirror
 * @param refMatrix - the matrix to mirror the letters from
 * @returns 
 */
function mirrorMatrix(refMatrix: Matrix, matrix: Matrix) {
  let copyMatrix: Matrix = [];
  const rows = refMatrix.length;
  const cols = refMatrix[0].length;
  console.log('refMatrix', refMatrix);
  for (let i = 0; i < rows; i++) {
    copyMatrix.push([]);
    for (let j = 0; j < cols; j++) {
      if (matrix[rows - 1 - i][j] === '')
        copyMatrix[i].push('');
      else
        copyMatrix[i].push(refMatrix[i][j]);
    }
  }
  return copyMatrix;
}

function setInitialMatrix() {
  let initialMatrix: Matrix = Array(8).fill(Array(4).fill(''));

  initialMatrix[2] = ['A', 'A', '', ''];
  initialMatrix[4] = ['', '', 'G', 'B'];

  return initialMatrix;
}

/**
 * Flip the matrix (flip it horizontally - left to right)
 * @param matrix - the matrix to flip
 * @returns 
 */
function flipMatrix(matrix: Matrix) {
  let copyMatrix: Matrix = [];
  const rows = matrix.length;
  const cols = matrix[0].length;
  for (let i = 0; i < rows; i++) {
    copyMatrix.push([]);
    for (let j = 0; j < cols; j++) {
      copyMatrix[i].push(matrix[i][cols - 1 - j]);
    }
  }
  return copyMatrix;
}

const MemoBlock = () => {
  const [matrix, setMatrix] = useState<Matrix>(setInitialMatrix);

  const colors: Colors = {
    C: 'bg-green-400',
    B: 'bg-yellow-400',
    A: 'bg-red-400',
    G: 'bg-purple-400',
    F: 'bg-blue-600',
    E: 'bg-blue-400',
    D: 'bg-green-600'
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
      <div className='flex-row gap-0 justify-center items-center'>
        <button className="m-3 w-16 h-10 rounded-full bg-dark-background-onDefault text-dark-background-default" onClick={() => setMatrix(mirrorMatrix(colorsTemplateMatrix, matrix))}>Mirror</button>
        <button className="m-3 w-16 h-10 rounded-full bg-dark-background-onDefault text-dark-background-defau" onClick={() => setMatrix(flipMatrix(matrix))}>Flip</button>
      </div>
    </div >
  );
};

export default MemoBlock;
