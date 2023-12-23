'use client';
import styled from 'styled-components';
import {ButtonContainer} from './ButtonContainer';
import { SuggestionPost, SuggestionPostComment } from '@/types';
import {PostHeadersInModal} from './PostHeadersInModal';
type Props = {
    children: React.ReactNode;
    title: string;
    content: string;
    handleSubmitCommentClick: (e:SuggestionPostComment) => void;
    currComment: SuggestionPostComment;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    post: SuggestionPost;
    
};

const SuggestionPageModal = styled.div`
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
`;

export function SuggestionPageModalComment({
    post,
    children,
    title,
    content,
    handleSubmitCommentClick,
    currComment,
    setIsModalOpen,
}: Props) {
    return (
        <SuggestionPageModal>
            <h1>{title}</h1>
            <h3>{content}</h3>
            {children}
           <div className='flex flex-col justify-center items-center'>
           <PostHeadersInModal
               title={post.title}
               content={post.content}
           />
           {post.comments.map((comment, index) => (
               <div key={index}>
                   <p>{comment?.content}</p>
                   <p>{index}</p>
               </div>
           ))}
       </div>
            <ButtonContainer
                handleSubmitCommentClick={handleSubmitCommentClick}
                currComment={currComment}
                setIsModalOpen={setIsModalOpen}
            />
        </SuggestionPageModal>
    );
}


