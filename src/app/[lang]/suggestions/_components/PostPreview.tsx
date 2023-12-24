import { Post } from '@/types';
import { Tags } from './Tags';

type Props = {
    post: Post;
};

export const PostPreview = ({ post }: Props) => {
    const { title, content, category, tags } = post;
    return (
        <div className='flex flex-col gap-2 items-center bg-slate-200 p-4 my-8 w-full'>
            <h2 className='text-xl'>{title}</h2>
            <p className='text-lg'>{content}</p>
            <p className='text-lg'>{category}</p>
            <Tags tags={tags} />
        </div>
    );
};
