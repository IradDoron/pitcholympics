'use client';

import { Button } from '@/components/core';
import { LibraryContentCourse } from '@/types/libraryPageTypes';
import { useEffect, useState } from 'react';

const Page = () => {
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
                    onClick={() => {}}
                    label='Add First Track'
                    className='w-fit'
                />
            )}
        </div>
    );
};

export default Page;
