'use client';
import { useEffect, useState } from 'react';
import { SuggestionPost, SuggestionPostComment } from '@/types';
import {
    PostHeadersInModal,
    SuggestionPageModalComment,
    PostForm,
    PostsContainer,
} from './_components';

import { useSession } from 'next-auth/react';
import { PostPage } from './_components/PostPage';
import { suggestionPostsData } from '@/data/suggestionPostsData';
import SuggestionsPost from '@/models/suggestionsPagePost';

const Page = () => {
    const { data: session } = useSession();
    const [posts, setPosts] = useState<SuggestionPost[]>(suggestionPostsData);
    const [currComment, setCurrComment] = useState<SuggestionPostComment>(null);
    const [currPost, setCurrPost] = useState<SuggestionPost>({
        title: '',
        content: '',
        category: '',
        comments: [],
        authorId: '',
        reactions: null,
    });
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    async function sendPost() {
        try {
            await fetch(
                // @ts-ignore
                `/controllers/posts/create-posts/${session?.user?.id}`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(currPost),
                },
            );
        } catch (error) {
            console.log(error);
        }
    }
    function handleSubmitCommentClick(comment: SuggestionPostComment) {
        console.log(comment);
        console.log('hail');
        setCurrPost({ ...currPost, comments: [comment] });
        setCurrComment(null);
        handleCommentChange(null);
        setIsModalOpen(false);
    }

    function handlePostChange(
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>
            | React.ChangeEvent<HTMLSelectElement>,
    ) {
        setCurrPost({ ...currPost, [e.target.name]: e.target.value });
    }

    function handleCommentChange(comment: SuggestionPostComment) {
        setCurrPost({ ...currPost, comments: [comment] });
    }

    return (
        <>
            <PostForm handleChange={handlePostChange} sendPost={sendPost} />
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
                            <SuggestionPageModalComment
                                post={post}
                                title={post.title}
                                content={post.content}
                                handleSubmitCommentClick={
                                    handleSubmitCommentClick
                                }
                                currComment={currComment}
                                setIsModalOpen={setIsModalOpen}>
                                <div className='flex flex-col justify-center items-center'>
                                    <PostHeadersInModal
                                        title={post.title}
                                        content={post.content}
                                    />
                                    {currPost.comments.map((comment, index) => (
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
                            </SuggestionPageModalComment>
                        )}
                    </div>
                ))}
            </PostsContainer>
        </>
    );
};

export default Page;
