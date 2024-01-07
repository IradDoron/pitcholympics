import Image from 'next/image';
import React from 'react';

type Props = {
    paragraphs: string[];
    authorName: string;
    authorImage?: string;
};

export const IntroCard = ({ paragraphs, authorName, authorImage }: Props) => {
    return (
        <>
            <div className='px-10 py-10'>
                <span className='leading-6'>
                    {paragraphs.map((paragraph, index, arr) => {
                        return (
                            <React.Fragment key={index}>
                                <p>{paragraph}</p>
                                {index < arr.length - 1 && (
                                    <>
                                        <br />
                                    </>
                                )}
                            </React.Fragment>
                        );
                    })}
                </span>
            </div>
            <div className='px-10 flex'>
                {authorImage && (
                    <Image
                        src={authorImage}
                        alt={authorName}
                        width={20}
                        height={20}
                        className='rounded-full'
                    />
                )}
                <span className='text-xs text-stone-500'>{authorName}</span>
            </div>
        </>
    );
};
