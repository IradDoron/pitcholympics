import React from 'react';

type Props = {
    children: React.ReactNode;
};


const PostsContainer = ({children}:Props) => {
    return (
        <div className='w-full h-full flex flex-col justify-center items-center'>
            {children}
        </div>
    );
};

export default PostsContainer;
