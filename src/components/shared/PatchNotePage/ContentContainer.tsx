import FeatureCard from './FeatureCard';
import BugFixedCard from './BugFixedCard';
import React from 'react';
import IntroCard from './IntroCard';
import AdjustmentsCard from './AdjustmentsCard';

const ContentContainer = () => {
    return (
        <div className='flex flex-col box-border w-full m-auto px-[60px] text-left'>
            <div className='mt-10'></div>
            <IntroCard />
            <BugFixedCard />
            <FeatureCard />
            <AdjustmentsCard />
        </div>
    );
};

export default ContentContainer;
