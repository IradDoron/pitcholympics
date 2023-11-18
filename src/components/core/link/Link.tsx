import React from 'react';
import NextLink from 'next/link';

type Props = {
    label: string;
    url: string;
    shape: 'circle' | 'square';
};

function Link({ label, url }: Props) {
    return (
        <NextLink
            className='w-24 h-24 rounded-full bg-red-500 text-white text-center flex justify-center items-center mt-[200px]'
            href={url}>
            {label}
        </NextLink>
    );
}

export default Link;
