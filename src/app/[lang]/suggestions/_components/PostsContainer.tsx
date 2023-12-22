import React from 'react';

type Props = {
    children: React.ReactNode;
};

export const PostsContainer = ({ children }: Props) => {
    return (
        <div className=' flex flex-col justify-center items-center gap-4'>
            {children}
        </div>
    );
};

 
