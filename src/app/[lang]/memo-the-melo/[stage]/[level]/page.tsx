'use client';

import { useState, useEffect } from 'react';
import NoteStep from '@/components/shared/noteStep';
import { MemoTheMeloGame } from '@/types';
import memoTheMeloMockData from '@/mockData/memoTheMelo';
import ButtonMelody from '@/components/shared/buttonMelody';

type Props = {
	params: {
		stage: number;
		level: number;
	};
};
const getLevelData = (
	stage: number,
	level: number,
	levelsData: MemoTheMeloGame
) => {
	return levelsData[stage - 1][level - 1];
};

const Page = ({ params }: Props) => {
	const [currentNote, setCurrentNote] = useState(1);
	const { stage, level } = params;
	const currentLevel = getLevelData(
		Number(stage),
		Number(level),
		memoTheMeloMockData
	);
	const { melody, notesAmount } = currentLevel;
	const [userGuess, setUserGuess] = useState<number[]>([]);
	const checkUserGuess = (userGuess: number[], melody: number[]) => {
		for (let i = 0; i < userGuess.length; i++) {
			if (!(userGuess[i] === melody[i])) return false;
		}
		if (currentNote < melody.length) {
			setCurrentNote(currentNote + 1);
		}
		setUserGuess([]);
		return true;
	};

	return (
		<>
			<div className='flex flex-row gap-2 justify-center'>
				{melody.map((_, index) => {
					const notePosition = currentNote - (index + 1);
					if (notePosition < 0)
						return <NoteStep state='NotPlayed' key={index} />;
					if (notePosition === 0)
						return <NoteStep state='Current' key={index} />;
					if (notePosition > 0) return <NoteStep state='Played' key={index} />;
				})}
			</div>

			<div>
				{userGuess.map((note, index) => {
					return <p key={index}>{note}</p>;
				})}
			</div>
			<div className='flex flex-row justify-center items-center gap-5 flex-wrap w-60 m-auto'>
				{new Array(notesAmount).fill(0).map((_, index) => {
					return (
						<ButtonMelody
							key={index}
							noteId={index + 1}
							setUserGuess={setUserGuess}
							currentNote={currentNote}
							userGuess={userGuess}
						/>
					);
				})}
			</div>
			<button onClick={() => checkUserGuess(userGuess, melody)}>
				check user guess
			</button>
		</>
	);
};

export default Page;
