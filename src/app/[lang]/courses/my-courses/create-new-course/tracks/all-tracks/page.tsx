'use client';

import { Button } from '@/components/core';
import { Locale } from '@/i18n.config';
import { LibraryContentCourse } from '@/types/libraryPageTypes';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

type Props = {
    params: {
        lang: Locale;
    };
};
const Page = ({ params }: Props) => {
    const [currentCourseState, setCurrentCourseState] =
        useState<LibraryContentCourse>({
            id: '',
            title: '',
            description: '',
            imageURL: '',
            tags: [],
            mainSubject: '',
            contentType: 'course',
            prerequisites: [],
            tracks: [],
        });
    const router = useRouter();

    const { lang } = params;

    const handleAddTrackClick = () => {
        router.push(
            `/${lang}/courses/my-courses/create-new-course/tracks/edit`,
        );
    };

    useEffect(() => {
        const currentCourse = JSON.parse(
            localStorage.getItem('currentCourse') || 'null',
        );
        setCurrentCourseState(currentCourse);
    }, []);

    return (
        <div className='flex flex-col items-center gap-8 p-8'>
            {!currentCourseState.tracks && (
                <Button
                    label='Add First Track'
                    className='w-fit'
                    onClick={handleAddTrackClick}
                />
            )}
        </div>
    );
};

export default Page;
