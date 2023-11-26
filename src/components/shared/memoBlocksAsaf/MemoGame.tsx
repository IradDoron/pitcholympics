'use client';

import { closestCenter, DndContext } from '@dnd-kit/core';
import {
    arrayMove,
    horizontalListSortingStrategy,
    SortableContext,
} from '@dnd-kit/sortable';
import { useState } from 'react';
//import { Matrix } from '@/types';
import { MatrixWithId } from '@/types';
import SortableCard from './SortableCard';
import { levelOneCards } from '@/mockData/memo-blocks';
import { parseTable } from '@/lib/utils';
import MemoBlocksCard from '../memoBlocks/MemoBlocksCard';

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


/**
 * Flip the matrix (flip it horizontally - left to right)
 * @param matrix - the matrix to flip
 * @returns
 */

const MemoGame = () => {
    const [levelCards, setLevelCards] = useState<MatrixWithId[]>(levelOneCards.map(table => parseTable(table)));
    const [guessCards, setGuessCards] = useState<MatrixWithId[]>(levelOneCards.map(table => parseTable(table)));

    const onDragEnd = (DragEvent: Props) => {
        const { active, over } = DragEvent;
        if (active.id === over.id) {
            return;
        }
        setGuessCards(cards => {
            const oldIndex = cards.findIndex(card => card.id === active?.id);
            const newIndex = cards.findIndex(card => card.id === over?.id);
            return arrayMove(cards, oldIndex, newIndex);
        });
    };

    return (
        <div className='grid grid-cols-4 gap-6 justify-center  border-2 border-solid border-black w-auto mt-44'>
            {levelCards.map(card => (
                <MemoBlocksCard key={card.id} matrix={card.data} />
            ))}
            <DndContext
                collisionDetection={closestCenter}
                onDragEnd={onDragEnd}>
                <SortableContext
                    items={guessCards}
                    strategy={horizontalListSortingStrategy}>
                    {guessCards.map(card => (
                        <SortableCard key={card.id} card={card} />
                    ))}
                </SortableContext>
            </DndContext>
        </div>
    );
};
export default MemoGame;
