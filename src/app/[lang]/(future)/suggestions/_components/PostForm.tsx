'use client';

import { Post as PostType } from '@types';
import { Dispatch, SetStateAction, useState } from 'react';

type Props = {
    handleChange: (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>
            | React.ChangeEvent<HTMLSelectElement>,
    ) => void;

    sendPost: () => Promise<void>;
    setCurrPost: Dispatch<SetStateAction<PostType>>;
    currPost: PostType;
};

export const PostForm = ({
    handleChange,
    sendPost,
    setCurrPost,
    currPost,
}: Props) => {
    const [currTag, setCurrTag] = useState<string>('');

    const handleCurrTagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCurrTag(e.target.value);
    };

    const handleAddTagClick = () => {
        setCurrPost(prev => ({ ...prev, tags: [...prev.tags, currTag] }));
        setCurrTag('');
    };

    return (
        <div className='flex flex-col justify-center items-center gap-5'>
            <input
                name='title'
                type='text'
                value={currPost.title}
                placeholder='enter Your title'
                className='border-2 border-gray-500 rounded-md p-2'
                onChange={handleChange}
            />
            <textarea
                name='content'
                value={currPost.content}
                placeholder='enter Your suggestion'
                className='border-2 border-gray-500 rounded-md p-2'
                onChange={handleChange}
            />
            <select
                className='border-2 border-gray-500 rounded-md p-2'
                onChange={handleChange}
                value={currPost.category}
                name='category'>
                <option value='bugs'>באגים</option>
                <option value='suggestion'>הצעה למשחק</option>
                <option value='general'>כללי</option>
                <option value='features'>פיצ׳רים</option>
            </select>
            <input
                name='tags'
                type='text'
                placeholder='enter Your tags'
                value={currTag}
                className='border-2 border-gray-500 rounded-md p-2'
                onChange={handleCurrTagChange}
            />
            <button
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                onClick={handleAddTagClick}>
                הוסף תגיות
            </button>
        </div>
    );
};
