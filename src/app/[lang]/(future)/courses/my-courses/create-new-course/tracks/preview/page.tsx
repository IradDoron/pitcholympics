'use client';

import { Locale } from '@/i18n.config';
import { Button, Text } from '@core';
import { CourseTrack, LibraryContentCourse } from '@types';
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
        ) as LibraryContentCourse;

        // get current track id
        const currentTrackId = currentTrack.id as string;

        // check if current track id is in current course tracks, if exists return the index of the track in the array, else return -1
        const currentTrackIndex = currentCourse.tracks.findIndex(
            (track: CourseTrack) => track.id === currentTrackId,
        );

        // if current track index is -1, add current track to current course tracks, else replace current track with current track in current course tracks
        if (currentTrackIndex === -1) {
            currentCourse.tracks.push(currentTrack);
        } else {
            currentCourse.tracks[currentTrackIndex] = currentTrack;
        }

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
            <Button label='Submit Track' onClick={handleSubmitTrackClick} />
        </div>
    );
};

export default Page;
