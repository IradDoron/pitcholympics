import React from 'react';

const FeatureCard = () => {
    return (
        <>
            {/* features Header */}
            <header className='flex items-center mt-14 ml-8'>
                <h2 className='text-2xl text-yellow-500 font-bold font-serif tracking-wider leading-tight m-0'>
                    Features
                </h2>
            </header>
            {/* Features card */}
            <div className='m-10 p-10 border border-solid border-gray-700'>
                <div>
                    {/* cluded all the content card */}
                    <h4 className='font-serif line-height-0.85 font-bold'>
                        Intro Features
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
                        Features
                    </h4>
                    <ul className='list-disc my-4 ml-10 text-sm'>
                        <li className='my-3'>
                            Any ally scoreboard item, ultimate, or Summoner
                            Spell cooldown ping is sent to the team if the item
                            or ability is in the last 50% of its cooldown.
                        </li>
                        <li className='my-3'>
                            Added new Game called memoTheMelow
                        </li>
                        <li className='my-3'>
                            Added 3 hide and seek game with melody
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default FeatureCard;
