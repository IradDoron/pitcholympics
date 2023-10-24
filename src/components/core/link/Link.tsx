import React from 'react';
import NextLink from 'next/link';

type Props = {
  label: string;
  url: string;
  shape: 'circle' | 'square';
};

function Link({ label, url, shape }: Props) {
  return (
    <div  className='w-25% h-25% rounded-full bg-red-500 text-white text-center flex justify-center items-center mt-[200px]'>
      <NextLink href={url}>{label}</NextLink>
    </div>
  );
}

export default Link;
