'use client';
import { SuggestionPost } from '@/types';
import { PageFiller } from '@shared';

type Props = {
    handleChange: (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>
            | React.ChangeEvent<HTMLSelectElement>,
    ) => void;

    sendPost: () => Promise<void>;
};

export const PostForm = ({ handleChange, sendPost }: Props) => {
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
