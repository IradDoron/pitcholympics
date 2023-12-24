'use client';
import { PageFiller } from '@shared';
import { ChangeEventHandler, Dispatch, SetStateAction, useState } from 'react';
import { Post as PostType } from '@/types';

type Props = {
    handleChange: (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>
            | React.ChangeEvent<HTMLSelectElement>,
    ) => void;

    sendPost: () => Promise<void>;
    setCurrPost: Dispatch<SetStateAction<PostType>>;
};

export const PostForm = ({ handleChange, sendPost, setCurrPost }: Props) => {
    const [currTag, setCurrTag] = useState<string>('');

    const handleCurrTagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCurrTag(e.target.value);
    };

    const handleAddTagClick = () => {
        setCurrPost(prev => ({ ...prev, tags: [...prev.tags, currTag] }));
        setCurrTag('');
    };

    return (
        <div className='flex flex-col h-full justify-center items-center gap-5'>
            <PageFiller />

            <input
                name='title'
                type='text'
                placeholder='enter Your title'
                className='border-2 border-gray-500 rounded-md p-2'
                onChange={handleChange}
            />
            <textarea
                name='content'
                placeholder='enter Your suggestion'
                className='border-2 border-gray-500 rounded-md p-2'
                onChange={handleChange}
            />
            <select
                className='border-2 border-gray-500 rounded-md p-2'
                onChange={handleChange}
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
                className='border-2 border-gray-500 rounded-md p-2'
                onChange={handleCurrTagChange}
            />
            <button
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                onClick={handleAddTagClick}>
                הוסף תגיות
            </button>
            <button
                className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
                onClick={sendPost}>
                שלח
            </button>

            <div className='flex flex-row gap-8'>
                <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>
                    הצג הכל
                </button>
                <button className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded'>
                    קטגוריות
                </button>
                <button className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded'>
                    פוסטים שלי
                </button>
                <button className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded'>
                    לפי לייקים
                </button>
            </div>
        </div>
    );
};
