'use client';
import { useState } from 'react';
import { SuggestionPost, SuggestionPostComment } from '@/types';
import { ModalComment, PostForm, PostsContainer } from './_components';
import { useSession } from 'next-auth/react';
import { Post } from './_components/Post';
import { suggestionPostsData } from '@/data/suggestionPostsData';

const Page = () => {
    const { data: session } = useSession();
    const [posts, setPosts] = useState<SuggestionPost[]>(suggestionPostsData);
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
                            <Post post={post} setIsModalOpen={setIsModalOpen} />
                        ) : (
                            <ModalComment
                                post={post}
                                setIsModalOpen={setIsModalOpen}
                            />
                        )}
                    </div>
                ))}
            </PostsContainer>
        </>
    );
};

export default Page;
