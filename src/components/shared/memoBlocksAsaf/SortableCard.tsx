import {
    SortableContext,
    horizontalListSortingStrategy,
    useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Matrix, Colors } from '@/types';
import { useState } from 'react';
import { colorsTemplateMatrix } from '@/constants';
import MemoBlocksCard from './MemoBlocksCard';
import { MatrixCell } from '@/types';
import { type } from 'os';

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
        let initialMatrix: Matrix = {
            id: Math.random(),
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
        let copyMatrix: Matrix = { id: Math.random(), data: matrix.data };
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
        let copyMatrix: Matrix = { id: Math.random(), data: matrix.data };
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

    const colors: Colors = {
        C: 'bg-green-400',
        B: 'bg-yellow-400',
        A: 'bg-red-400',
        G: 'bg-purple-400',
        F: 'bg-blue-600',
        E: 'bg-blue-400',
        D: 'bg-green-600',
    };

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
            <div
                style={{
                    backgroundColor: 'lightcoral',
                    padding: '10px',
                    display: 'inline-block',
                    border: '1px solid black',
                    width: '40px',
                    margin: '1px',
                }}>
                <div className='h-screen flex items-center justify-center'>
                    <MemoBlocksCard matrix={matrix} />
                    <div className='flex-row gap-0 justify-center items-center'>
                        <button
                            className='m-3 w-16 h-10 rounded-full bg-dark-background-onDefault text-dark-background-default'
                            onClick={() => setMatrix(mirrorMatrix(matrix))}>
                            Mirror
                        </button>
                        <button
                            className='m-3 w-16 h-10 rounded-full bg-dark-background-onDefault text-dark-background-defau'
                            onClick={() => setMatrix(flipMatrix(matrix))}>
                            Flip
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SortableCard;
