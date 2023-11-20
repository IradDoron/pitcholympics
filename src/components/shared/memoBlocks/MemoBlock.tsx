"use client"
import React, { useEffect, useState } from 'react';
import type { Colors, Matrix } from '@/types';
import { colorsTemplateMatrix, colors } from '@/constants';
import MemoBlocksCard from './MemoBlocksCard';
import { memoBlocksMockDataGuesses, memoBlocksMockDataLevel } from '@/mockData/memoBlocks';
import { FlipHorizontal2, FlipVertical2 } from 'lucide-react';

/**
 * Mirror the matrix (flip it vertically - up to down)
 * @param matrix  - the matrix to mirror
 * @returns 
 */
function mirrorMatrix(matrix: Matrix) {
  const refMatrix = colorsTemplateMatrix;
  let copyMatrix: Matrix = [];
  const rows = refMatrix.length;
  const cols = refMatrix[0].length;
  for (let i = 0; i < rows; i++) {
    copyMatrix.push([]);
    for (let j = 0; j < cols; j++) {
      if (!matrix[rows - 1 - i][j].isActive)
        copyMatrix[i].push({ note: refMatrix[i][j].note, isActive: false, isTied: false });
      else
        copyMatrix[i].push(refMatrix[i][j]);
    }
  }
  return copyMatrix;
}

function setInitialMatrixs(matArr: Matrix[]): Matrix[] {
  return matArr.map(matrix => matrix.map((row, rowIndex) => {
    return row.map((block, colIndex) => {
      return { note: colorsTemplateMatrix[rowIndex][colIndex].note, isActive: block.isActive, isTied: block.isTied };
    });
  }));
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
  const [levelMatrixes, setLevelMatrixes] = useState<Matrix[]>(setInitialMatrixs(memoBlocksMockDataLevel));
  const [guesses, setGuesses] = useState<Matrix[]>(setInitialMatrixs(memoBlocksMockDataGuesses)); // TODO: get the guesses from the server
  const [activeMatrixIndex, setActiveMatrixIndex] = useState<number>(0);

  const activeMatrix = guesses[activeMatrixIndex];

  function setActiveMatrix(index: number) {
    setActiveMatrixIndex(index);
  }
  function changeMatrix(matrix: Matrix) {
    const newMatrixes = [...guesses];
    newMatrixes[activeMatrixIndex] = matrix;
    setGuesses(newMatrixes);
  }

  return (
    <div className="h-full flex items-center justify-center flex-col">
      <div className='m-1 flex flex-row gap-2 justify-center items-center'>
        <FlipHorizontal2 className='w-10 h-10' onClick={() => changeMatrix(flipMatrix(activeMatrix))} />
        <FlipVertical2 className='w-10 h-10' onClick={() => changeMatrix(mirrorMatrix(activeMatrix))} />
      </div>
      <div className='w-full flex-nowrap flex sm:w-fit sm:flex-row'>
        {levelMatrixes.map((matrix, index) => (
          <MemoBlocksCard key={index} matrix={matrix} isActive={false} />
        ))}
      </div>
      <div className='w-full flex-nowrap flex sm:w-fit sm:flex-row'>
        {guesses.map((matrix, index) => (
          <MemoBlocksCard key={index} matrix={matrix} onClick={() => setActiveMatrix(index)} isActive={index === activeMatrixIndex} />
        ))}
      </div>

    </div >
  );
};

export default MemoBlock;
