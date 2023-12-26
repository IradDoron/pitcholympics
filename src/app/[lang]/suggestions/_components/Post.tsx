import { Button } from '@/components/core/Button';
import { Post as PostType } from '@/types';

type Props = {
    post: PostType;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Post = ({ post, setIsModalOpen }: Props) => {
    function handleComment() {
        setIsModalOpen(true);
    }

    return (
        <div className='flex flex-col bg-white items-center justify-center rounded-lg'>
            <img
                className='w-20 h-20 rounded-full'
                src={
                    'https://avatars.githubusercontent.com/u/79254940?s=400&u=147b1dea1ecaef6c6c6c13c3373b6ade17ced236&v=4'
                }
            />
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-2xl'>{post.title}</h1>
                <p>{post.content}</p>
                <p>{post.category}</p>
            </div>
            <Button label='Comment' onClick={handleComment} />
        </div>
    );
};
