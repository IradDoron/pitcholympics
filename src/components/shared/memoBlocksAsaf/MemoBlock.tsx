'use client';
import React, { useState } from 'react';
import type { Colors, Matrix } from '@/types';
import { colorsTemplateMatrix, colors } from '@/constants';
import MemoBlocksCard from './MemoBlocksCard';
import { MatrixCell } from '@/types';
/**
 * Mirror the matrix (flip it vertically - up to down)
 * @param matrix  - the matrix to mirror
 * @returns
 */
// function mirrorMatrix(matrix: Matrix) {
//     const refMatrix = colorsTemplateMatrix;
//     let copyMatrix: Matrix = { id: Math.random(), data: matrix.data };
//     const rows = refMatrix.data.length;
//     const cols = refMatrix.data[0].length;
//     for (let i = 0; i < rows; i++) {
//         copyMatrix.data.push([]);
//         for (let j = 0; j < cols; j++) {
//             if (!matrix.data[rows - 1 - i][j].isActive)
//                 copyMatrix.data[i].push({
//                     note: refMatrix.data[i][j].note,
//                     isActive: false,
//                     isTied: false,
//                 });
//             else copyMatrix.data[i].push(refMatrix.data[i][j]);
//         }
//     }
//     return copyMatrix;
// }
// //{ id: number; data: MatrixCell[][] }
// function setInitialMatrix() {
//     let initialMatrix: Matrix = {
//         id: null,
//         data: Array(8).fill(Array(4).fill({ note: 'D', isActive: false })),
//     };

//     initialMatrix.data[1] = [
//         { note: 'D', isActive: false, isTied: false },
//         { note: 'D', isActive: false, isTied: false },
//         { note: 'D', isActive: true, isTied: false },
//         { note: 'D', isActive: false, isTied: false },
//     ];
//     initialMatrix.data[2] = [
//         { note: 'C', isActive: true, isTied: false },
//         { note: 'C', isActive: false, isTied: false },
//         { note: 'C', isActive: true, isTied: false },
//         { note: 'C', isActive: false, isTied: false },
//     ];
//     return initialMatrix;
// }

// /**
//  * Flip the matrix (flip it horizontally - left to right)
//  * @param matrix - the matrix to flip
//  * @returns
//  */
// function flipMatrix(matrix: Matrix) {
//     let copyMatrix: Matrix = { id: Math.random(), data: matrix.data };
//     const rows = matrix.data.length;
//     const cols = matrix.data[0].length;
//     for (let i = 0; i < rows; i++) {
//         copyMatrix.data.push([]);
//         for (let j = 0; j < cols; j++) {
//             copyMatrix.data[i].push(matrix.data[i][cols - 1 - j]);
//         }
//     }
//     console.log('copyMatrix', copyMatrix);
//     return copyMatrix;
// }

const MemoBlock = (matrix: Matrix) => {
    //const [matrix, setMatrix] = useState<Matrix>(setInitialMatrix);

    return (
        <div className='h-screen flex items-center justify-center'>
            <MemoBlocksCard matrix={matrix} />
            {/* <div className='flex-row gap-0 justify-center items-center'>
                <button
                    className='m-3 w-16 h-10 rounded-full bg-dark-background-onDefault text-dark-background-default'
                    onClick={() => setMatrix(mirrorMatrix(matrix))}>
                    Mirror
                </button>
                <button
                    className='m-3 w-16 h-10 rounded-full bg-dark-background-onDefault text-dark-background-default'
                    onClick={() => setMatrix(flipMatrix(matrix))}>
                    Flip
                </button>
            </div> */}
        </div>
    );
};

export default MemoBlock;