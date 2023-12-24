import React from 'react';

const AdjustmentsCard = () => {
    return (
        <>
            {/* Adjustment */}
            <header className='flex items-center mt-14 ml-8'>
                <h2 className='text-2xl text-yellow-500 font-bold font-serif tracking-wider leading-tight m-0'>
                    Adjustment
                </h2>
            </header>
            {/* Adjustment card */}
            <div className='m-10 p-10 border border-solid border-gray-700'>
                <div>
                    {/* cluded all the content card */}
                    <h4 className='font-serif line-height-0.85 font-bold'>
                        Buffs
                    </h4>
                    <ul className='list-disc my-4 ml-10 text-sm'>
                        <li className='my-3'>
                            Rumble: Damage Taken: 95% ⇒ 100%
                        </li>
                        <li className='my-3'>
                            Rumble: Damage Taken: 95% ⇒ 100%
                        </li>
                        <li className='my-3'>
                            Rumble: Damage Taken: 95% ⇒ 100%
                        </li>
                    </ul>
                    <hr className='border-t border-gray-700 my-6' />
                    <h4 className='font-serif line-height-0.85 font-bold'>
                        Nerfs
                    </h4>
                    <ul className='list-disc my-4 ml-10 text-sm'>
                        <li className='my-3'>Heart: 10 ⇒ 2</li>
                        <li className='my-3'>
                            Rumble: Damage Taken: 95% ⇒ 100%
                        </li>
                        <li className='my-3'>
                            Rumble: Damage Taken: 95% ⇒ 100%
                        </li>
                    </ul>
                    <hr className='border-t border-gray-700 my-6' />
                    <h4 className='font-serif line-height-0.85 font-bold'>
                        Adjustment
                    </h4>
                    <ul className='list-disc my-4 ml-10 text-sm'>
                        <li className='my-3'>
                            we changes memoTheMelo to be more difficult
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default AdjustmentsCard;
