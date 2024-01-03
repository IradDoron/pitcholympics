import Image from 'next/image';
import React from 'react';

type Props = {
    paragraphs: string[];
    authorName: string;
    authorImage: string;
};

export const IntroCard = ({ paragraphs, authorName, authorImage }: Props) => {
    return (
        <>
            <div className='px-10 py-10'>
                <span className='leading-6'>
                    {paragraphs.map((paragraph, index, arr) => {
                        return (
                            <>
                                <p>{paragraph}</p>
                                {index < arr.length - 1 && (
                                    <>
                                        <br />
                                    </>
                                )}
                            </>
                        );
                    })}
                </span>
            </div>
            <div className='px-10'>
                <Image src={authorImage} alt={authorName} />
                <span className='text-xs text-stone-500'>{authorName}</span>
            </div>
        </>
    );
};
