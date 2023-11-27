import { colors } from '@/constants';
import type { MatrixCell, Notes } from '@/types';
import React from 'react';

type Props = {
    rowIndex: number;
    colIndex: number;
    cell: MatrixCell;
    disabled: boolean;
}



const MemoBlocksMatCell = ({ rowIndex, colIndex, cell, disabled }: Props) => {
    
    const curser = !disabled && 'cursor-pointer';


    const handleCellClick = (rowIndex: number, colIndex: number) => {
        if(disabled) return;
    // on click cell hear the sound
    };

    return (

        <div
            className={`w-4 h-4 sm:w-11 sm:h-10 flex items-center justify-center rounded-3xl ${curser} ${cell.isActive && colors[cell.note]}`}
            onClick={() => handleCellClick(rowIndex, colIndex)}
        >
            <p className='text-light-primary-contrastText dark:text-dark-primary-contrastText'>{cell.isActive && cell.note}</p>
        </div>
    );
};

export default MemoBlocksMatCell;