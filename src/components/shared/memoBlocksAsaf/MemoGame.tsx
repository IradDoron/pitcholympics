import { closestCenter, DndContext } from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    useSortable,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useState } from 'react';
import { Matrix } from '@/types';
import { colorsTemplateMatrix } from '@/constants';
import SortableCard from './SortableCard';

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
//{ id: number; data: MatrixCell[][] }
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

const InitialMatrix1 = setInitialMatrix();
const InitialMatrix2 = setInitialMatrix();

/**
 * Flip the matrix (flip it horizontally - left to right)
 * @param matrix - the matrix to flip
 * @returns
 */
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

const MemoGame = () => {
    const [cards, setCards] = useState([InitialMatrix1, InitialMatrix2]);

    const onDragEnd = e => {
        //console.log("drag end ", e);
        const { active, over } = e;
        if (active.id === over.id) {
            return;
        }
        setCards(cards => {
            const oldIndex = cards.findIndex(card => card.id === active.id);
            const newIndex = cards.findIndex(card => card.id === over.id);
            return arrayMove(cards, oldIndex, newIndex);
        });
    };

    return (
        <div>
            <DndContext
                collisionDetection={closestCenter}
                onDragEnd={onDragEnd}>
                <SortableContext
                    items={cards}
                    strategy={verticalListSortingStrategy}>
                    {cards.map(card => (
                        <SortableCard key={card.id} card={card} />
                    ))}
                </SortableContext>
            </DndContext>
        </div>
    );
};
export default MemoGame;
