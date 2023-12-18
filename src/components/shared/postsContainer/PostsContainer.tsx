import React from 'react';

type Props = {
    children: React.ReactNode;
};

const PostsContainer = ({ children }: Props) => {
    return (
        <div className='w-full h-full flex flex-col justify-center items-center gap-4'>
            {children}
        </div>
    );
};

export default PostsContainer;
