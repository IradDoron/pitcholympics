'use client';
import { useRouter } from 'next/navigation';
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
	console.log(levelsData)
	return levelsData[stage - 1][level - 1];
};


const Page = ({ params }: Props) => {
	const router = useRouter();
	const handleWin = () => {
		const scoreWinning = params.stage + params.level * 2
		localStorage.setItem('score', scoreWinning.toString());
		router.push(`${params.level}/result`);
	};

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
		if (userGuess.length === 0) return
		for (let i = 0; i < userGuess.length; i++) {
			if (!(userGuess[i] === melody[i])) return false;
		}
		if (currentNote < melody.length) {
			console.log(currentNote + "current Note")
			setCurrentNote(currentNote + 1);
		}
		if (currentNote === melody.length) {
			handleWin()
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
			{/* change button to coponenets peleg */}
			<button className='px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300 hover:bg-indigo-700 hover:text-white' onClick={() => checkUserGuess(userGuess, melody)}>
				check user guess
			</button>
		</>
	);
};

export default Page;
