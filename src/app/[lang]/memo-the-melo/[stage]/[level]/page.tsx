'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { MemoTheMeloGame } from '@/types';
import memoTheMeloMockData from '@/mockData/memoTheMelo';
import ButtonMelody from '@/components/shared/buttonMelody';
import LevelStepper from '@/components/shared/levelStepper';
import { Locale } from '@/i18n.config';

type Props = {
	params: {
		stage: number;
		level: number;
		lang: Locale;
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
		router.push(`${params.level}/${params.lang}/result`);
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
		<div className='container mx-auto h-full flex flex-col justify-center items-center gap-2 border-red-600 border-solid border-2'>
			
				<LevelStepper currentStep={1} totalSteps={notesAmount}/>
			

			{/* <div>
				{userGuess.map((note, index) => {
					console.log(note);
					return <p key={index}>{note}</p>;
				})}
				<h1>haim</h1>
			</div> */}
			<div className='flex flex-row justify-center items-center gap-5 flex-wrap w-60'>
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
		</div>
	);
};

export default Page;
