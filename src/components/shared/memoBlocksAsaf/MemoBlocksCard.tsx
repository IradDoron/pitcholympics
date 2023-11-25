import { MatrixAsaf } from '@/types';
import MemoBlocksMatCell from '../memoBlocks/MemoBlocksCell';
import PlayIcon from '@/components/icons/playIcon';
type Props = {
    matrix: MatrixAsaf; // matrix of the card (8x4), each cell is a contains a note and isActive & isTied flags
};
const MemoBlocksCard = ({ matrix }: Props) => {
    // const melody: MemoBlockCardMelody ; // TODO: get the melody by the matrix active notes

    const handlePlayMelody = () => {
        // play the melody
    };

    return (
        <div className='shadow-lg drop-shadow-lg rounded-lg p-1.5 bg-light-surface-primary dark:bg-dark-surface-primary '>
            {matrix.data &&
                matrix.data.map((row, rowIndex) => (
                    <div key={rowIndex} className='flex flex-row'>
                        {row.map((cell, colIndex) => (
                            <MemoBlocksMatCell
                                key={cell.note + rowIndex + colIndex}
                                cell={cell}
                                colIndex={colIndex}
                                rowIndex={rowIndex}
                            />
                        ))}
                    </div>
                ))}
            <div className='flex flex-row justify-center'>
                <PlayIcon
                    onClick={handlePlayMelody}
                    className='cursor-pointer'
                />
            </div>
        </div>
    );
};

export default MemoBlocksCard;
