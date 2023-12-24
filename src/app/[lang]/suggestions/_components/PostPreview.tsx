import { Post } from '@/types';
import { Tags } from './Tags';

type Props = {
    post: Post;
};

export const PostPreview = ({ post }: Props) => {
    const { title, content, category, tags, authorId } = post;
    return (
        <div className='flex flex-col gap-2'>
            <h2 className='text-xl'>{title}</h2>
            <p className='text-lg'>{content}</p>
            <p className='text-lg'>{category}</p>
            <p className='text-lg'>{authorId}</p>
            <Tags tags={tags} />
            <pre>{JSON.stringify(post, null, 2)}</pre>
        </div>
    );
};
