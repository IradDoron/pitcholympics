'use client';
import { useEffect, useState } from 'react';
import { Post as PostType, PostComment } from '@/types';
import { ModalComment, PostForm, PostsContainer } from './_components';
import { useSession } from 'next-auth/react';
import { Post } from './_components/Post';

const Page = () => {
    const { data: session } = useSession();
    const [posts, setPosts] = useState<PostType[]>([]);
    const [currPost, setCurrPost] = useState<PostType>({
        title: '',
        content: '',
        tags: [],
        category: '',
        comments: [],
        authorId: '',
        reactions: null,
    });
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    useEffect(() => {
        //@ts-expect-error - session is not null
        const authorId = session?.user?.id;
        setCurrPost({ ...currPost, authorId });
    }, [session]);
    async function sendPost() {
        try {
            await fetch(
                // @ts-ignore
                `/controllers/suggestions`,
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

    function handleCommentChange(comment: PostComment) {
        setCurrPost({ ...currPost, comments: [comment] });
    }

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
            <PostForm
                handleChange={handlePostChange}
                sendPost={sendPost}
                setCurrPost={setCurrPost}
            />
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
