'use client';

import { Post, PostComment, ReactionType } from '@types';
import { useSession } from 'next-auth/react';
import { SetStateAction, useEffect, useState } from 'react';
import { ButtonContainer } from './ButtonContainer';

type Props = {
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    post: Post;
    setCurrPost: React.Dispatch<SetStateAction<Post>>;
    sendComment: () => void;
    currPost: Post;
};

/* 
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
    id: '',
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

export function ModalComment({
    post,
    setIsModalOpen,
    setCurrPost,
    sendComment,
    currPost,
}: Props) {
    const { data: session } = useSession();
    const [currComment, setCurrComment] = useState<PostComment>(
        post.comments[0] || initialComment,
    );
    const [currReaction, setCurrReaction] = useState<ReactionType | null>(null);

    function updateCurrPost() {
        setCurrPost({ ...post, comments: [currComment] });
    }

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
        updateCurrPost();
        setIsModalOpen(false);
    }

    function handleContentChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setCurrComment({ ...currComment, content: e.target.value });
        setCurrPost({ ...post, comments: [currComment] });
        sendComment();
    }
    function handleCurrReactionChange(e: React.ChangeEvent<HTMLSelectElement>) {
        setCurrReaction(e.target.value as ReactionType);
    }

    useEffect(() => {
        const userId = session?.user?.id;
        if (!userId) return;
        setCurrComment({ ...currComment, authorId: userId });
    }, []);

    return (
        <div className='bg-{theme.colors.colorName1} w-screen h-screen flex flex-col justify-center items-center border-2 border-red-500 fixed top-0 right-0'>
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
        </div>
    );
}
