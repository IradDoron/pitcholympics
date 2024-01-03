import type { MatrixCell } from '@types';

export const colors = {
    C: 'bg-light-notes-C dark:bg-dark-notes-C',
    D: 'bg-light-notes-D dark:bg-dark-notes-D',
    E: 'bg-light-notes-E dark:bg-dark-notes-E',
    F: 'bg-light-notes-F dark:bg-dark-notes-F',
    G: 'bg-light-notes-G dark:bg-dark-notes-G',
    A: 'bg-light-notes-A dark:bg-dark-notes-A',
    B: 'bg-light-notes-B dark:bg-dark-notes-B',
};

type Props = {
    rowIndex: number;
    colIndex: number;
    cell: MatrixCell;
    disabled: boolean;
};

export const MemoBlocksMatCell = ({
    rowIndex,
    colIndex,
    cell,
    disabled,
}: Props) => {
    const curser = !disabled && 'cursor-pointer';

    const handleCellClick = (rowIndex: number, colIndex: number) => {
        if (disabled) return;
        // on click cell hear the sound
    };

    return (
        <div
            className={`w-4 h-4 sm:w-11 sm:h-10 flex items-center justify-center rounded-3xl ${curser} ${
                cell.isActive && colors[cell.note]
            }`}
            onClick={() => handleCellClick(rowIndex, colIndex)}>
            <p className='text-light-primary-contrastText dark:text-dark-primary-contrastText text-xs sm:text-base'>
                {cell.isActive && cell.note}
            </p>
        </div>
    );
};
