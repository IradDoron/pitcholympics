'use client';

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Matrix, Colors } from '@/types';
import { useState } from 'react';
import { colorsTemplateMatrix } from '@/constants';
import MemoBlocksCard from './MemoBlocksCard';
//import { MatrixCell } from '@/types';
//import { type } from 'os';

type Props = {
    card: Matrix;
};

const SortableCard = ({ card }: Props) => {
    const [matrix, setMatrix] = useState<Matrix>(setInitialMatrix);
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({ id: card.id });
    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
    };

    function setInitialMatrix() {
        const initialMatrix: Matrix = {
            id: crypto.randomUUID(),
            data: Array(8).fill(Array(4).fill({ note: 'D', isActive: false })),
        };

        initialMatrix.data[1] = [
            { note: 'D', isActive: false, isTied: false },
            { note: 'D', isActive: false, isTied: false },
            { note: 'D', isActive: true, isTied: false },
            { note: 'D', isActive: false, isTied: false },
        ];
        initialMatrix.data[2] = [
            { note: 'C', isActive: true, isTied: false },
            { note: 'C', isActive: false, isTied: false },
            { note: 'C', isActive: true, isTied: false },
            { note: 'C', isActive: false, isTied: false },
        ];
        return initialMatrix;
    }

    function mirrorMatrix(matrix: Matrix) {
        const refMatrix = colorsTemplateMatrix;
        const copyMatrix: Matrix = { id: crypto.randomUUID(), data: [] };
        const rows = refMatrix.data.length;
        const cols = refMatrix.data[0].length;
        for (let i = 0; i < rows; i++) {
            copyMatrix.data.push([]);
            for (let j = 0; j < cols; j++) {
                if (!matrix.data[rows - 1 - i][j].isActive)
                    copyMatrix.data[i].push({
                        note: refMatrix.data[i][j].note,
                        isActive: false,
                        isTied: false,
                    });
                else copyMatrix.data[i].push(refMatrix.data[i][j]);
            }
        }
        return copyMatrix;
    }

    function flipMatrix(matrix: Matrix) {
        const copyMatrix: Matrix = { id: crypto.randomUUID(), data: [] };
        console.log('copyMatrix ', copyMatrix);
        const rows = matrix.data.length;
        const cols = matrix.data[0].length;
        for (let i = 0; i < rows; i++) {
            copyMatrix.data.push([]);
            for (let j = 0; j < cols; j++) {
                copyMatrix.data[i].push(matrix.data[i][cols - 1 - j]);
            }
        }
        console.log('copyMatrix', copyMatrix);
        return copyMatrix;
    }

    const handleCellClick = (rowIndex: number, colIndex: number) => {
        // on click cell hear the sound
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            //className='card'
        >
            <div className='h-auto flex flex-col items-center justify-center z-10'>
                <MemoBlocksCard matrix={matrix} />
                <div className='flex-row gap-0 justify-center items-center'>
                    <button
                        className='m-3 w-16 h-10 rounded-full bg-dark-background-onDefault text-dark-background-default'
                        // onClick replaced with onMouseDown - onClick was overwriten by dnd kit listeners
                        onMouseDown={() => setMatrix(mirrorMatrix(matrix))}>
                        Mirror
                    </button>
                    <button
                        className='m-3 w-16 h-10 rounded-full bg-dark-background-onDefault text-dark-background-defau'
                        // onClick replaced with onMouseDown - onClick was overwriten by dnd kit listeners
                        onMouseDown={() => setMatrix(flipMatrix(matrix))}>
                        Flip
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SortableCard;
