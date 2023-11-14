"use client"
import { getMatrixWithZeros } from '@/components/shared/memoBlocks/helpers';
import { Coordinate, MemoBlockCardNote } from '@/components/shared/memoBlocks/types';
import React, { useState } from 'react';

type Matrix = { value: string; color: string }[][];
type Colors = { [key: string]: string };





const getCardMatrix = (matrix: number[][], melody: MemoBlockCardNote[]) => {
    melody.forEach(note => {
        const { coordinate, haveNote, haveTie } = note
        const value = +haveNote + +haveTie
        const { row, col } = coordinate
        matrix[row][col] = value
    })
    return matrix
}

const mat1 = getMatrixWithZeros(8, 4)
const melody1 =
    [{ coordinate: { row: 0, col: 0 }, haveNote: true, haveTie: false },
    { coordinate: { row: 0, col: 1 }, haveNote: true, haveTie: false },
    { coordinate: { row: 1, col: 2 }, haveNote: true, haveTie: true },
    { coordinate: { row: 1, col: 3 }, haveNote: true, haveTie: false }]
const matrix2 = getCardMatrix(mat1, melody1)
console.log(matrix2)


const MemoBlockIrad = ({ initialCoordinates }: { initialCoordinates: Coordinate[] }) => {



    return (
        <>
        </>
    );
};

export default MemoBlockIrad;
