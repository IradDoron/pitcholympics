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
            className={`w-6 h-4 -mx-1 sm:w-11 sm:h-10 flex items-center justify-center rounded-3xl cursor-pointer ${cell.isActive && colors[cell.note]}`}
            onClick={() => handleCellClick(rowIndex, colIndex)}
        >
            <p className=' text-xs sm:text-base text-light-primary-contrastText dark:text-dark-primary-contrastText'>{cell.isActive && cell.note}</p>
        </div>
    )
}

export default MemoBlocksMatCell