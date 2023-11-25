'use client';

import { closestCenter, DndContext } from '@dnd-kit/core';
import {
    arrayMove,
    horizontalListSortingStrategy,
    SortableContext,
} from '@dnd-kit/sortable';
import { useState } from 'react';
//import { Matrix } from '@/types';
import { MatrixAsaf } from '@/types';
import SortableCard from './SortableCard';

type Props = {
    activatorEvent: PointerEvent;
    active: {
        id: string;
        data: any;
        rect: any;
    };
    collisions: any[];
    delta: {
        x: number;
        y: number;
        scaleX: number;
        scaleY: number;
    };
    over: {
        id: string;
        rect: any;
        data: any;
        disabled: boolean;
    };
};

function setInitialMatrix() {
    const initialMatrix: MatrixAsaf = {
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

const InitialMatrix1 = setInitialMatrix();
const InitialMatrix2 = setInitialMatrix();
const InitialMatrix3 = setInitialMatrix();

/**
 * Flip the matrix (flip it horizontally - left to right)
 * @param matrix - the matrix to flip
 * @returns
 */

const MemoGame = () => {
    const [cards, setCards] = useState<MatrixAsaf[]>([
        InitialMatrix1,
        InitialMatrix2,
        InitialMatrix3,
    ]);

    const onDragEnd = (DragEvent: Props) => {
        const { active, over } = DragEvent;
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
        <div className=' flex justify-center gap-4 border-2 border-solid border-black w-auto mt-44'>
            <DndContext
                collisionDetection={closestCenter}
                onDragEnd={onDragEnd}>
                <SortableContext
                    items={cards}
                    strategy={horizontalListSortingStrategy}>
                    {cards.map(card => (
                        <SortableCard key={card.id} card={card} />
                    ))}
                </SortableContext>
            </DndContext>
        </div>
    );
};
export default MemoGame;
