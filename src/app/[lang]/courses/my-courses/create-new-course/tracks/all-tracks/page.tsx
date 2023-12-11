'use client';

import { Button } from '@/components/core';
import Text from '@/components/core/Text';
import { Locale } from '@/i18n.config';
import { LibraryContentCourse } from '@/types/libraryPageTypes';
import { CourseTrack } from '@/types/libraryPageTypes/libraryContentCourse';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { TrackCard } from './_components';

type Props = {
    params: {
        lang: Locale;
    };
};
const Page = ({ params }: Props) => {
    const [currentCourse, setCurrentCourse] = useState<LibraryContentCourse>(
        {} as LibraryContentCourse,
    );
    const router = useRouter();

    const { lang } = params;

    const handleAddFirstTrackClick = () => {
        // define initial track
        const initTrack = {
            id: '1',
            title: 'Add track title',
            mainSubject: 'Add main subject',
            sections: [],
            required: false,
            parentId: '',
        } as CourseTrack;

        // save the initial track in localStorage
        localStorage.setItem('currentTrack', JSON.stringify(initTrack));

        // navigate to edit track page
        router.push(
            `/${lang}/courses/my-courses/create-new-course/tracks/edit`,
        );
    };

    useEffect(() => {
        const currentCourseStorage = JSON.parse(
            localStorage.getItem('currentCourse') || 'null',
        );

        setCurrentCourse(currentCourseStorage);
    }, []);

    return (
        <div className='flex flex-col items-center gap-8 p-8'>
            <Text className='text-xl text-center'>All Tracks</Text>
            {currentCourse.tracks?.length === 0 && (
                <Button
                    label='Add First Track'
                    className='w-fit'
                    onClick={handleAddFirstTrackClick}
                />
            )}
            <div className='flex flex-col gap-4 justify-center items-center'>
                {currentCourse.tracks?.map((track, index) => {
                    return (
                        <TrackCard
                            key={index}
                            track={track}
                            params={params}
                            currentCourse={currentCourse}
                            setCurrentCourse={setCurrentCourse}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Page;
