'use client';

import { Text } from '@core';

type props = {
    subject: string;
};

const SubjectsGridItem = ({ subject }: props) => {
    return (
        <div className='w-[200px] h-[130px] bg-blue-500  flex items-center justify-center'>
            <Text className='text-sm'> {subject}</Text>
        </div>
    );
};

export default SubjectsGridItem;
