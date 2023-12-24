import React from 'react';

const BugFixedCard = () => {
    return (
        <>
            {/* bug fix Header */}
            <header className='flex items-center mt-14 ml-8'>
                <h2 className='text-2xl text-yellow-500 font-bold font-serif tracking-wider leading-tight m-0'>
                    Bugfixes & Changes
                </h2>
            </header>
            {/* bug fix card */}
            <div className='m-10 p-10 border border-solid border-gray-700'>
                <div>
                    {/* cluded all the content card */}
                    <h4 className='font-serif line-height-0.85 font-bold'>
                        Intro Bugfixed
                    </h4>
                    <ul className='list-disc my-4 ml-10 text-sm'>
                        <li>
                            In an effort to simplify the Career Stats tab in the
                            client we’ve updated it so that now only the current
                            calendar year and most recent year of data can be
                            viewed. This will be displayed as Season 2022, Split
                            1 2023, and Split 2 2023.
                        </li>
                    </ul>
                    <hr className='border-t border-gray-700 my-6' />
                    <h4 className='font-serif line-height-0.85 font-bold'>
                        Bug Fixes
                    </h4>
                    <ul className='list-disc my-4 ml-10 text-sm'>
                        <li className='my-3'>
                            Fixed a bug that caused killing an enemy with Lulu’s
                            Pix to give incorrect kill credit.
                        </li>
                        <li className='my-3'>
                            Fixed a bug that caused Rell’s W - Ferromancy: Crash
                            Down and R - Magnet Storm combination to sometimes
                            cause R - Magnet Storm to interrupt channeled
                            abilities.
                        </li>
                        <li className='my-3'>
                            Fixed a bug that caused K’Sante to become bugged
                            after using certain ability combos during his R -
                            All Out.
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default BugFixedCard;
