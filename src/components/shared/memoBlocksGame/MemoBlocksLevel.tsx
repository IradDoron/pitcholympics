'use client';

import { closestCenter, DndContext } from '@dnd-kit/core';
import {
    arrayMove,
    horizontalListSortingStrategy,
    SortableContext,
} from '@dnd-kit/sortable';
import { useEffect, useState } from 'react';
import { Matrix, MatrixWithId } from '@/types';
import SortableCard from './SortableCard';
import MemoBlocksCard from './MemoBlocksCard';
import { FlipHorizontal2Icon, FlipVertical2Icon, Loader } from 'lucide-react';
import { flipMatrix, mirrorMatrix } from './utils';
import { compareArrays, handleEndLevel, shuffleArray } from '@/utils';
import { memoBlocksLevels } from '@/mockData';
import { Locale } from '@/i18n.config';
import { useRouter } from 'next/navigation';

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

type Props = {
    levelData: MatrixWithId[];
    level: number;
    stage: number;
    lang: Locale;
};

const setInitialMatrixes = (levelData: MatrixWithId[]) => {
    function scrambleCard(matrix: MatrixWithId) {
        const [flip, mirror] = [Math.random() > 0.5, Math.random() > 0.5];
        let newMatrix = matrix;
        if (flip) newMatrix = flipMatrix(newMatrix) as MatrixWithId;
        if (mirror) newMatrix = mirrorMatrix(newMatrix) as MatrixWithId;
        return newMatrix;
    }
    const matrixes = levelData.map(card => scrambleCard(card));
    return shuffleArray([...matrixes]);
};

const MemoBlocksLevel = ({ levelData, level, stage, lang }: Props) => {
    const router = useRouter(); // Next.js router
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [guessCards, setGuessCards] = useState<MatrixWithId[]>([]);
    const [activeMatrixId, setActiveMatrixId] = useState<string>('');
    const activeMatrix = guessCards.find(m => m.id === activeMatrixId)!;
    const currentStageLevels = memoBlocksLevels[stage - 1].length;

    useEffect(() => {
        setGuessCards(setInitialMatrixes(levelData));
        setIsLoading(false);
    }, []);

    function changeMatrix(matrix: MatrixWithId | undefined) {
        if (!matrix) return;
        const newMatrixes = [...guessCards];
        newMatrixes.find(m => m.id === matrix.id)!.data = matrix.data;
        setGuessCards(newMatrixes);
        checkVictory();
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
        checkVictory();
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        event.preventDefault();
        event.stopPropagation();
        if (['ArrowUp', 'ArrowDown', 'F', 'f'].includes(event.key)) {
            changeMatrix(mirrorMatrix(activeMatrix));
        }
        else if (['ArrowLeft', 'ArrowRight', 'M', 'm'].includes(event.key)) {
            changeMatrix(flipMatrix(activeMatrix));
        }
        else if (event.key === 'Tab') {
            const activeIndex = guessCards.findIndex(card => card.id === activeMatrixId);
            const nextIndex = (activeIndex + 1) % guessCards.length;
            setActiveMatrixId(guessCards[nextIndex].id);
        }
    };

    const checkVictory = () => {
        const isVictory = compareArrays(guessCards.map(card => card.data), levelData.map(card => card.data), compareCards);
        if (isVictory) {
            handleWin();
            handleEndLevel(stage, level, lang, 'memo-blocks', 'win', router);
        }
    };

    const handleWin = async () => {
        // update the status level and stage to database
        try {
            // TODO: fix the session error
            //@ts-ignore
            const res = await fetch(
                //@ts-ignore
                `${CURRENT_DOMAIN}/api/games/memo-blocks/${session?.user?.id}`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-type': 'application/json',
                    },
                    body: JSON.stringify({
                        status: 'passed',
                        stage: stage,
                        level: level,
                        isLastLevel: level >= currentStageLevels
                    }),
                },
            );

            if (!res.ok) {
                throw new Error('Failed to update');
            }
        } catch (error) {
            console.log(error);
        }
    }

    const compareCards = (card1: Matrix, card2: Matrix): boolean => {
        let equal = true;
        card1.forEach((row, i) => {
            row.forEach((cell, j) => {
                if (!equal) return;
                const other = card2[i][j];
                if (JSON.stringify(cell) !== JSON.stringify(other)) {
                    equal = false;
                    return;
                }
            });
        });

        return equal;
    };

    if (isLoading)
        return <Loader color='green' />;

    return (
        <div className='flex flex-col gap-5 items-center justify-center mt-3' onKeyDown={handleKeyDown}>
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
                {levelData.map(card => (
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
export default MemoBlocksLevel;
