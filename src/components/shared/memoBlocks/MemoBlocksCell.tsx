import { colors } from '@/constants';
import type { MatrixCell, Notes } from '@/types';
import React from 'react'

type Props = {
    rowIndex: number;
    colIndex: number;
    cell: MatrixCell;
}

const handleCellClick = (rowIndex: number, colIndex: number) => {
    // on click cell hear the sound
};

const MemoBlocksMatCell = ({ rowIndex, colIndex, cell }: Props) => {
    return (

        <div
            className={`w-11 h-10 flex items-center justify-center rounded-3xl cursor-pointer ${cell.isActive && colors[cell.note]}`}
            onClick={() => handleCellClick(rowIndex, colIndex)}
        >
            {cell.isActive && cell.note}
        </div>
    )
}

export default MemoBlocksMatCell