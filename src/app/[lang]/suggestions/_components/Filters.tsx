export const Filters = () => {
    return (
        <div>
            <div className='flex flex-row gap-8 my-8'>
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
