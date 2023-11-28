import React from 'react';
import PageFiller from '../pageFiller/PageFiller';

const PostsForm = () => {
    return (
        <div className='flex flex-col h-full justify-center items-center gap-5'>
            <PageFiller />
            <input
                type='text'
                placeholder='enter Your title'
                className='border-2 border-gray-500 rounded-md p-2'
            />
            <textarea
                placeholder='enter Your suggestion'
                className='border-2 border-gray-500 rounded-md p-2'
            />
            <select className='border-2 border-gray-500 rounded-md p-2'>
                <option value='pitch-catch'>באגים</option>
                <option value='pitch-button'>הצעה למשחק</option>
                <option value='pitch-match'>כללי</option>
                <option value='pitch-match'>פיצ׳רים</option>
            </select>
            <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>
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

export default PostsForm;
