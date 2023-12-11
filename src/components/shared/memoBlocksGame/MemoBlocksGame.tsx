'use client';

import { parseTable } from '@/lib/utils';
import { levelOneCards } from '@/mockData/memoBlocks';
import { MatrixWithId } from '@/types';
import { shuffleArray } from '@/utils';
import { closestCenter, DndContext } from '@dnd-kit/core';
import {
    arrayMove,
    horizontalListSortingStrategy,
    SortableContext,
} from '@dnd-kit/sortable';
import { FlipHorizontal2Icon, FlipVertical2Icon, Loader } from 'lucide-react';
import { useEffect, useState } from 'react';
import MemoBlocksCard from './MemoBlocksCard';
import SortableCard from './SortableCard';
import { flipMatrix, mirrorMatrix } from './utils';

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

const setInitialMatrixes = () => {
    function scrambleMatrix(matrix: MatrixWithId) {
        const [flip, mirror] = [Math.random() > 0.5, Math.random() > 0.5];
        let newMatrix = matrix;
        if (flip) newMatrix = flipMatrix(newMatrix) as MatrixWithId;
        if (mirror) newMatrix = mirrorMatrix(newMatrix) as MatrixWithId;
        return newMatrix;
    }

    const levelCards = levelOneCards.map(table => parseTable(table));
    const matrixes = levelCards.map(matrix => scrambleMatrix(matrix));
    return shuffleArray([...matrixes]);
};

const MemoBlocksGame = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [guessCards, setGuessCards] = useState<MatrixWithId[]>([]);
    const [activeMatrixId, setActiveMatrixId] = useState<string>('');
    const levelCards = levelOneCards.map(table => parseTable(table));
    const activeMatrix = guessCards.find(m => m.id === activeMatrixId)!;

    useEffect(() => {
        setGuessCards(setInitialMatrixes());
        setIsLoading(false);
    }, []);

    function changeMatrix(matrix: MatrixWithId | undefined) {
        if (!matrix) return;
        const newMatrixes = [...guessCards];
        newMatrixes.find(m => m.id === matrix.id)!.data = matrix.data;
        setGuessCards(newMatrixes);
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

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        event.preventDefault();
        event.stopPropagation();
        if (['ArrowLeft', 'ArrowRight', 'F', 'f'].includes(event.key)) {
            changeMatrix(mirrorMatrix(activeMatrix));
        } else if (['ArrowUp', 'ArrowDown', 'M', 'm'].includes(event.key)) {
            changeMatrix(flipMatrix(activeMatrix));
        } else if (event.key === 'Tab') {
            const activeIndex = guessCards.findIndex(
                card => card.id === activeMatrixId,
            );
            const nextIndex = (activeIndex + 1) % guessCards.length;
            setActiveMatrixId(guessCards[nextIndex].id);
        }
    };

    if (isLoading) return <Loader color='green' />;

    return (
        <div
            className='flex flex-col gap-5 items-center justify-center mt-3'
            onKeyDown={handleKeyDown}>
            <div className='flex flex-row gap-3 justify-center items-center text-center'>
                <FlipVertical2Icon
                    className='w-10 h-10 rounded-lg bg-gray-100 dark:bg-transparent dark:text-light-background-default text-dark-background-default'
                    onPointerDown={() =>
                        changeMatrix(mirrorMatrix(activeMatrix))
                    }
                />
                <FlipHorizontal2Icon
                    className='w-10 h-10 rounded-lg bg-gray-100 dark:bg-transparent dark:text-light-background-default text-dark-background-default'
                    onPointerDown={() => changeMatrix(flipMatrix(activeMatrix))}
                />
            </div>
            <div className='grid grid-cols-4 gap-6 justify-center max-w-fit self-center items-center'>
                {levelCards.map(card => (
                    <MemoBlocksCard
                        key={`levelCard#${card.id}`}
                        matrix={card.data}
                        disabled
                    />
                ))}
                <DndContext
                    collisionDetection={closestCenter}
                    onDragEnd={onDragEnd}>
                    <SortableContext
                        items={guessCards}
                        strategy={horizontalListSortingStrategy}>
                        {guessCards.map(card => (
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
