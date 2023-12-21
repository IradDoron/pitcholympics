'use client';
import { PostPage, PostsContainer, PostsForm } from '@shared';
import { useState } from 'react';
import { SuggestionPost, SuggestionPostComment } from '@/types';
import SuggestionPageModalComponent from '../_components/suggestionPageModal';
import { Button } from '@/components/core/Button';
import PostHeadersInModal from './_components/postHeadersInModal';
import ButtonContainer from './_components/buttonContainer';

const Page = () => {
    const [posts, setPosts] = useState<SuggestionPost[]>([]);
    const [currComment, setCurrComment] = useState<SuggestionPostComment>(null);
    const [post, setPost] = useState<SuggestionPost>({
        title: '',
        content: '',
        category: '',
        comments: [],
        authorId: '',
        reactions: null,
    });
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const addPost = (e: React.MouseEvent<HTMLButtonElement>): void => {
        setPosts([...posts, post]);
        setPost({
            title: '',
            content: '',
            category: '',
            comments: [],
            reactions: null,
            authorId: '',
        });
        sendPost(post);
    };

    async function sendPost(post: SuggestionPost) {
        try {
            const response = await fetch(
                `${process.env.BASE_URL}/api/suggestions`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(post),
                },
            );
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
       
    }
    function handleSubmitCommentClick(comment: SuggestionPostComment) {
        console.log(comment);
        console.log('hail');
        handleCommentChange(null);
        setIsModalOpen(false);
    }

    function handlePostChange(
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>
            | React.ChangeEvent<HTMLSelectElement>,
    ) {
        setPost({ ...post, [e.target.name]: e.target.value });
    }

    function handleCommentChange(comment: SuggestionPostComment) {
        setPost({ ...post, comments: [comment] });
    }

    return (
        <>
            <PostsForm handleChange={handlePostChange} addPost={addPost} />
            <PostsContainer>
                {posts.map((post, index) => (
                    <div key={index}>
                        {!isModalOpen ? (
                            <PostPage
                                title={post.title}
                                picSrc=''
                                content={post.content}
                                category={post.category}
                                setIsModalOpen={setIsModalOpen}
                            />
                        ) : (
                            <SuggestionPageModalComponent
                                title={post.title}
                                content={post.content}>
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

                                <textarea
                                    onChange={e =>
                                        setCurrComment({
                                            content: e.target.value,
                                            authorId: '',
                                            date: Date.now(),
                                            reactions: null,
                                            comments: [],
                                        })
                                    }></textarea>

                                <ButtonContainer
                                    handleSubmitCommentClick={
                                        handleSubmitCommentClick
                                    }
                                    currComment={currComment}
                                    setIsModalOpen={setIsModalOpen}
                                />
                            </SuggestionPageModalComponent>
                        )}
                    </div>
                ))}
            </PostsContainer>
        </>
    );
};

export default Page;
