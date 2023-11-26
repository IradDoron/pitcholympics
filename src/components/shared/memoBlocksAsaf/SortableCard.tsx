'use client';

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { MatrixWithId, Colors } from '@/types';
import { useState } from 'react';
import { colorsTemplateMatrix } from '@/constants';
import MemoBlocksCard from './MemoBlocksCard';
import { levelOneCards } from '@/mockData/memo-blocks';
import { parseTable } from '@/lib/utils';
import { FlipHorizontal2Icon, FlipVertical2Icon } from 'lucide-react';

type Props = {
    card: MatrixWithId;
};

const SortableCard = ({ card }: Props) => {
    const [matrix, setMatrix] = useState<MatrixWithId>(card);
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({ id: card.id });
    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
    };

    function setInitialMatrix() {
        return parseTable(levelOneCards[0]);
    }

    function mirrorMatrix(matrix: MatrixWithId) {
        const refMatrix = colorsTemplateMatrix;
        const copyMatrix: MatrixWithId = { id: matrix.id, data: [] };
        const rows = refMatrix.length;
        const cols = refMatrix[0].length;
        for (let i = 0; i < rows; i++) {
            copyMatrix.data.push([]);
            for (let j = 0; j < cols; j++) {
                if (!matrix.data[rows - 1 - i][j].isActive)
                    copyMatrix.data[i].push({
                        note: refMatrix[i][j].note,
                        isActive: false,
                        isTied: false,
                    });
                else copyMatrix.data[i].push(refMatrix[i][j]);
            }
        }
        return copyMatrix;
    }

    function flipMatrix(matrix: MatrixWithId) {
        const copyMatrix: MatrixWithId = { id: matrix.id, data: [] };
        const rows = matrix.data.length;
        const cols = matrix.data[0].length;
        for (let i = 0; i < rows; i++) {
            copyMatrix.data.push([]);
            for (let j = 0; j < cols; j++) {
                copyMatrix.data[i].push(matrix.data[i][cols - 1 - j]);
            }
        }
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
            <div className='h-auto items-center justify-center z-10 max-w-[240px]'>
                <MemoBlocksCard matrix={matrix} />
                <div className='flex-row gap-0 justify-center items-center'>
                    <button
                        className='m-3 w-16 h-10 rounded-full bg-dark-background-onDefault text-dark-background-default'
                        // onClick replaced with onPointerDown - onClick was overwriten by dnd kit listeners
                        onPointerDown={() => setMatrix(mirrorMatrix(matrix))}>
                        <FlipVertical2Icon/>
                    </button>
                    <button
                        className='m-3 w-16 h-10 rounded-full bg-dark-background-onDefault text-dark-background-defau'
                        // onClick replaced with onPointerDown - onClick was overwriten by dnd kit listeners
                        onPointerDown={() => setMatrix(flipMatrix(matrix))}>
                        <FlipHorizontal2Icon/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SortableCard;
