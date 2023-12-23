'use client';
import styled from 'styled-components';
import { ButtonContainer } from './ButtonContainer';
import {
    ReactionType,
    Reactions,
    SuggestionPost,
    SuggestionPostComment,
} from '@/types';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
type Props = {
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    post: SuggestionPost;
};

const Modal = styled.div`
    background-color: ${({ theme }) => theme.colors.colorName1};
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid red;
    position: fixed;
    top: 0;
    right: 0;
`; /* 
export type SuggestionPostComment = {
    content: string;
    authorId: string;
    date: number;
    reactions: Reactions;
    comments: SuggestionPostComment[];
} | null;
export type ReactionType =
    | 'like'
    | 'dislike'
    | 'love'
    | 'haha'
    | 'wow'
    | 'sad'
    | 'angry';

export type Reactions =
    | {
          // eslint-disable-next-line no-unused-vars
          [key in ReactionType]: string[]; //array of userIds
      }
    | null;
*/
const initialComment = {
    content: '',
    authorId: '',
    date: null,
    reactions: null,
    comments: [],
};
const reactionsArray = [
    'like',
    'dislike',
    'love',
    'haha',
    'wow',
    'sad',
    'angry',
];

export function ModalComment({ post, setIsModalOpen }: Props) {
    const { data: session } = useSession();
    const [currComment, setCurrComment] =
        useState<SuggestionPostComment>(initialComment);
    const [currReaction, setCurrReaction] = useState<ReactionType | null>(null);

    function handleSubmitCommentClick() {
        let newReactions = null;

        if (currReaction && currComment.reactions) {
            newReactions = {
                ...currComment.reactions,
                [currReaction]: [
                    ...currComment.reactions[currReaction],
                    currComment.authorId,
                ],
            };
        }

        const newDate = Date.now();
        const newComment = {
            ...currComment,
            reactions: newReactions,
            date: newDate,
        };
        alert(JSON.stringify(newComment));
        setIsModalOpen(false);
    }

    function handleContentChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setCurrComment({ ...currComment, content: e.target.value });
    }
    function handleCurrReactionChange(e: React.ChangeEvent<HTMLSelectElement>) {
        setCurrReaction(e.target.value as ReactionType);
    }

    useEffect(() => {
        // @ts-expect-error-error - Session is not null
        const userId = session?.user?.id;
        setCurrComment({ ...currComment, authorId: userId });
    }, []);

    return (
        <Modal>
            <h1 className='text-2xl'>title:{post.title}</h1>
            <h3 className='text-large'>content:{post.content}</h3>

            <div className='flex flex-col justify-center items-center'>
                {post.comments.map((comment, index) => (
                    <div key={index}>
                        <p>{comment?.content}</p>
                        <p>{index}</p>
                    </div>
                ))}
            </div>
            <textarea
                onChange={handleContentChange}
                value={currComment.content}
            />
            <select onChange={handleCurrReactionChange}>
                {reactionsArray.map((reaction, index) => (
                    <option key={index} value={reaction}>
                        {reaction}
                    </option>
                ))}
            </select>
            <ButtonContainer
                handleSubmitCommentClick={handleSubmitCommentClick}
                currComment={currComment}
                setIsModalOpen={setIsModalOpen}
            />
        </Modal>
    );
}
