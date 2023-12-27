'use client';
import { v4 as uuidv4 } from 'uuid';
import { Button } from '@/components/core';
import { PostComment, Post as PostType } from '@/types';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import {
    Filters,
    ModalComment,
    PostForm,
    PostPreview,
    PostsContainer,
} from './_components';
import { Post } from './_components/Post';

const initCurrPost: PostType = {
    title: '',
    content: '',
    tags: [],
    category: 'general',
    comments: [],
    authorId: '',
    reactions: null,
};

const Page = () => {
    const { data: session } = useSession();
    const [posts, setPosts] = useState<PostType[]>([]);
    const [currPost, setCurrPost] = useState<PostType>(initCurrPost);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    async function sendPost() {
        try {
            await fetch(`/controllers/suggestions`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    post: currPost,
                }),
            });
            // @ts-expect-error - Session is not null
            const authorId = session?.user?.id;
            setCurrPost({ ...initCurrPost, authorId });
            console.log(currPost);
        } catch (error) {
            console.log(error);
        }
    }
    async function getPosts() {
        try {
            const res = await fetch(`/controllers/suggestions`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await res.json();
            setPosts(data);
        } catch (error) {
            console.log(error);
        }
    }

    async function sendComment() {
        try {
            await fetch(`/controllers/suggestions/`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    post: currPost,
                }),
            });
            // @ts-expect-error - Session is not null
            const authorId = session?.user?.id;
            setCurrPost({ ...initCurrPost, authorId });
        
        } catch (error) {
            console.log(error);
        }
    }

    function handlePostChange(
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>
            | React.ChangeEvent<HTMLSelectElement>,
    ) {
        setCurrPost({ ...currPost, [e.target.name]: e.target.value });
    }

    function handleCommentChange(comment: PostComment) {
        setCurrPost({
            ...currPost,
            comments: [...currPost.comments, comment],
        });
    }

    useEffect(() => {
        getPosts();
    }, [currPost]);

    if (!session)
        return (
            <div>
                <p className='text-center text-xl text-light-background-onDefault dark:text-dark-background-onDefault'>
                    You need to be logged in to see this page
                </p>
            </div>
        );

    return (
        <>
            <div className='flex flex-col items-center justify-end'>
                <PostForm
                    handleChange={handlePostChange}
                    sendPost={sendPost}
                    setCurrPost={setCurrPost}
                    currPost={currPost}
                />
                <PostPreview post={currPost} />
                <Button label='Submit' onClick={sendPost} />
                <Filters />
                <PostsContainer>
                    {posts.reverse().map((post, index) => (
                        <div key={index}>
                            {!isModalOpen ? (
                                <Post
                                    post={post}
                                    setIsModalOpen={setIsModalOpen}
                                />
                            ) : (
                                <ModalComment
                                    post={post}
                                    currPost={currPost}
                                    sendComment={sendComment}
                                    setIsModalOpen={setIsModalOpen}
                                    setCurrPost={setCurrPost}
                                />
                            )}
                        </div>
                    ))}
                </PostsContainer>
            </div>
        </>
    );
};

export default Page;
