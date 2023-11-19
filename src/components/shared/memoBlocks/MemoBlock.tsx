"use client"
import React, { useState } from 'react';
import type { Colors, Matrix } from '@/types';
import { colorsTemplateMatrix, colors } from '@/constants';
import MemoBlocksCard from './MemoBlocksCard';
import { memoBlocksMockData } from '@/mockData/memoBlocks';
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

function setInitialMatrix() {
  return memoBlocksMockData[4].map((row,rowIndex) => {
    return row.map((block,colIndex) => {
      return { note: colorsTemplateMatrix[rowIndex][colIndex].note, isActive: block.isActive, isTied: block.isTied };
    });
  })
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

  return (
    <div className="h-screen flex items-center justify-center">
      <MemoBlocksCard matrix={matrix} />
      <div className='flex-row gap-0 justify-center items-center'>
        <FlipHorizontal2 className='w-10 h-10' onClick={() => setMatrix(flipMatrix(matrix))} />
        <FlipVertical2 className='w-10 h-10' onClick={() => setMatrix(mirrorMatrix(matrix))} />

      </div>
    </div >
  );
};

export default MemoBlock;
