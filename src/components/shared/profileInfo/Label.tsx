import React from 'react';

type Props = {
    label: string;
    children: React.ReactNode;
};

const Label = ({ label, children }: Props) => {
    return (
        <label className='w-full'>
            <span>{label}:</span>
            {children}
        </label>
    );
};

export default Label;
