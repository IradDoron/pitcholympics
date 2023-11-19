import React from 'react'
import { Matrix, MemoBlockCardMelody } from '@/types'
import MemoBlocksMatCell from './MemoBlocksCell';
import PlayIcon from '@/components/icons/playIcon'
type Props = {
    matrix: Matrix // matrix of the card (8x4), each cell is a contains a note and isActive & isTied flags
    onClick?: () => void
    isActive?: boolean
}
const MemoBlocksCard = ({ matrix, onClick, isActive }: Props) => {

    // const melody: MemoBlockCardMelody ; // TODO: get the melody by the matrix active notes

    const handlePlayMelody = () => {
        // play the melody
    }

    const border = isActive ? "border-blue-600 border-2" : "border-gray-300"

    return (
        <div className={`shadow-lg drop-shadow-lg rounded-lg p-1.5 m-1 bg-light-surface-primary dark:bg-dark-surface-primary ${border}`} onClick={onClick}>
            {matrix.map((row, rowIndex) => (
                <div key={rowIndex} className="flex flex-row">
                    {row.map((cell, colIndex) => (
                        <MemoBlocksMatCell key={cell.note + rowIndex + colIndex} cell={cell} colIndex={colIndex} rowIndex={rowIndex} />
                    ))}
                </div>
            ))}
            <div className="flex flex-row justify-center">
                <PlayIcon onClick={handlePlayMelody} className='cursor-pointer' />
            </div>
        </div>
    )
}

export default MemoBlocksCard