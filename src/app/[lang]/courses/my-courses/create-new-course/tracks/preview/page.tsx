'use client';

import { Button } from '@/components/core';
import Text from '@/components/core/Text';
import { Locale } from '@/i18n.config';
import { useRouter } from 'next/navigation';

type Props = {
    params: {
        lang: Locale;
    };
};

const Page = ({ params }: Props) => {
    const router = useRouter();
    const { lang } = params;

    const handleSubmitTrackClick = () => {
        // get current track from localStorage
        const currentTrack = JSON.parse(
            localStorage.getItem('currentTrack') || 'null',
        );

        // get current course from localStorage
        const currentCourse = JSON.parse(
            localStorage.getItem('currentCourse') || 'null',
        );

        // add current track to current course
        currentCourse.tracks = [...currentCourse.tracks, currentTrack];

        // save current course in localStorage
        localStorage.setItem('currentCourse', JSON.stringify(currentCourse));

        // remove track from localStorage and replace with empty track object
        localStorage.setItem('currentTrack', JSON.stringify({}));

        // navigate to all tracks page
        router.push(
            `/${lang}/courses/my-courses/create-new-course/tracks/all-tracks`,
        );
    };

    return (
        <div className='p-8'>
            <Text className='text-xl text-center'>Preview</Text>
            <Button
                label='Submit Track'
                className='w-fit'
                onClick={handleSubmitTrackClick}
            />
        </div>
    );
};

export default Page;
