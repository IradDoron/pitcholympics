'use client';

import { closestCenter, DndContext } from '@dnd-kit/core';
import {
    arrayMove,
    horizontalListSortingStrategy,
    SortableContext,
} from '@dnd-kit/sortable';
import { useState } from 'react';
import { MatrixWithId } from '@/types';
import SortableCard from './SortableCard';
import { levelOneCards } from '@/mockData/memoBlocks';
import { parseTable } from '@/lib/utils';
import MemoBlocksCard from './MemoBlocksCard';

type DragEventType = {
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
    const [guessCards, setGuessCards] = useState<MatrixWithId[]>(levelOneCards.map(table => parseTable(table)));
    const [activeMatrixId, setActiveMatrixId] = useState<string>(guessCards[0].id);
    
    const levelCards = levelOneCards.map(table => parseTable(table));
    const activeMatrix = guessCards.find(m => m.id === activeMatrixId)!;

  function changeMatrix(matrix: MatrixWithId) {
    const newMatrixes = [...guessCards];
    newMatrixes.find(m => m.id === matrix.id)!.data = matrix.data;
    setGuessCards(newMatrixes);
  }
    const onDragEnd = (DragEvent: DragEventType) => {
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
        <div className='scale-75 grid grid-cols-4 gap-6 justify-center max-w-fit self-center items-center mt-10'>
            {levelCards.map(card => (
                    <MemoBlocksCard key={`levelCard#${card.id}`} matrix={card.data} disabled/>
            ))}
            <DndContext
                collisionDetection={closestCenter}
                onDragEnd={onDragEnd}>
                <SortableContext
                    items={guessCards}
                    strategy={horizontalListSortingStrategy}>
                    {guessCards.map((card) => (
                        <SortableCard
                            key={card.id}
                            card={card} 
                            isActive={card.id === activeMatrixId}
                            onClick={() => setActiveMatrixId(card.id)}
                            />
                    ))}
                </SortableContext>
            </DndContext>
        </div>
    );
};
export default MemoGame;
