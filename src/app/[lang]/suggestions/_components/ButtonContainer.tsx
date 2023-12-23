import { Button } from '@/components/core';
import { SuggestionPostComment } from '@/types';

type Props = {
    handleSubmitCommentClick: (currComment: SuggestionPostComment) => void;
    currComment: SuggestionPostComment;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ButtonContainer = ({
     handleSubmitCommentClick,
    currComment,
    setIsModalOpen,
}: Props) => {
    return (
        <div className='flex flex-col items-center mt-8'>
            <button
                type='submit'
                onClick={() => handleSubmitCommentClick(currComment)}
                className='bg-green-500 text-white rounded-md p-2'></button>
            <Button label={'Close'} onClick={() => setIsModalOpen(false)} />
        </div>
    );
};

