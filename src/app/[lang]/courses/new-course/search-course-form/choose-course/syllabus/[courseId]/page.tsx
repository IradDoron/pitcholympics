'use client';

import { Locale } from '@/i18n.config';
import { Button, Link, Text } from '@core';

type Props = {
    params: {
        lang: Locale;
        courseId: string;
    };
};

const Page = ({ params }: Props) => {
    const { lang, courseId } = params;
    const handleClick = () => {
        alert(`handleClick: ${courseId}`);
    };

    return (
        <div className='flex flex-col w-full h-full items-center gap-4'>
            <Text className='text-xl'>שׁם הקורס</Text>
            <div className=' w-1/2 h-1/2 bg-white items-center justify-center'>
                lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum. lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quisquam, voluptatum. lorem ipsum dolor sit
                amet consectetur adipisicing elit. Quisquam, voluptatum. lorem
                ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                voluptatum. lorem ipsum dolor sit amet consectetur adipisicing
                elit. Quisquam, voluptatum. lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quisquam, voluptatum.
            </div>
            <div className='flex flex-row justify-between items-center '>
                <Button label='Choose Course' onClick={handleClick} />
                <Link
                    label='Back'
                    url={`/${lang}/courses/new-course/search-course-form/choose-course`}
                />
            </div>
        </div>
    );
};

export default Page;
