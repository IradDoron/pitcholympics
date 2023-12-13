'use client';

import { pianoAccompanimentPatterns } from '@/data/pianoData';
import { Text } from '@core';
import abcjs from 'abcjs';
import { useEffect } from 'react';

type Props = {
    params: {
        id: string;
    };
};

const Page = ({ params }: Props) => {
    const { id } = params;
    const pattern = pianoAccompanimentPatterns[id];
    const {
        name,
        description,
        videoTutorialsUrls,
        mainTutorialUrlIndex,
        useCases,
        hand,
        category,
        optionalMeters,
        abcNotationExampleInC,
    } = pattern;

    useEffect(() => {
        abcjs.renderAbc(`piano-pattern-${id}`, abcNotationExampleInC, {
            scale: 1.5,
        });
    }, []);

    return (
        <div className='flex flex-col items-center justify-center gap-4'>
            <Text className='text-2xl'>
                ID {id}: {name}{' '}
            </Text>
            <Text className='text-lg'>{category.name}</Text>
            <Text className='text-lg'>{description}</Text>
            <Text className='text-lg'>{hand} hand</Text>
            <div className='flex gap-4'>
                {optionalMeters.map(meter => {
                    return <Text key={meter}>{meter}</Text>;
                })}
            </div>
            <div id={`piano-pattern-${id}`}></div>
            <Text className='text-lg'>Main Tutorial:</Text>
            <iframe
                width='560'
                height='315'
                src={videoTutorialsUrls[mainTutorialUrlIndex]}
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'></iframe>
            <Text className='text-lg'>More Tutorials:</Text>
            <div className='flex gap-4 flex-wrap items-center justify-center'>
                {videoTutorialsUrls.map((url, index) => {
                    if (index === mainTutorialUrlIndex) return null;
                    return (
                        <iframe
                            key={index}
                            width='360'
                            height='200'
                            src={url}
                            title='YouTube video player'
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'></iframe>
                    );
                })}
            </div>
            <Text className='text-lg'>Use cases:</Text>
            <ul className='flex gap-4 list-disc flex-col'>
                {useCases.map(useCase => {
                    return (
                        <li key={useCase}>
                            <Text>{useCase}</Text>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Page;
