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
import { FlipHorizontal2Icon, FlipVertical2Icon } from 'lucide-react';
import { colorsTemplateMatrix } from '@/constants';


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

const MemoBlocksGame = () => {
    const [guessCards, setGuessCards] = useState<MatrixWithId[]>(levelOneCards.map(table => parseTable(table)));
    const [activeMatrixId, setActiveMatrixId] = useState<string>(guessCards[0].id);
    const levelCards = levelOneCards.map(table => parseTable(table));
    const activeMatrix = guessCards.find(m => m.id === activeMatrixId)!;

    function changeMatrix(matrix: MatrixWithId) {
        const newMatrixes = [...guessCards];
        newMatrixes.find(m => m.id === matrix.id)!.data = matrix.data;
        setGuessCards(newMatrixes);
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

    const onDragEnd = (DragEvent: DragEventType) => {
        const { active, over } = DragEvent;
        if (active.id === over?.id) {
            return;
        }
        setGuessCards(cards => {
            const oldIndex = cards.findIndex(card => card.id === active?.id);
            const newIndex = cards.findIndex(card => card.id === over?.id);
            return arrayMove(cards, oldIndex, newIndex);
        });
    };

    return (
        <div className='flex flex-col gap-5 items-center justify-center mt-3'>
            <div className='flex flex-row gap-3 justify-center items-center text-center'>
                <FlipVertical2Icon
                    className='w-10 h-10 rounded-lg bg-gray-100 dark:bg-transparent dark:text-light-background-default text-dark-background-default'
                    onPointerDown={() => changeMatrix(mirrorMatrix(activeMatrix))} />
                <FlipHorizontal2Icon
                    className='w-10 h-10 rounded-lg bg-gray-100 dark:bg-transparent dark:text-light-background-default text-dark-background-default'
                    onPointerDown={() => changeMatrix(flipMatrix(activeMatrix))}
                />
            </div>
            <div className='grid grid-cols-4 gap-6 justify-center max-w-fit self-center items-center'>
                {levelCards.map(card => (
                    <MemoBlocksCard key={`levelCard#${card.id}`} matrix={card.data} disabled />
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
        </div>
    );
};
export default MemoBlocksGame;
