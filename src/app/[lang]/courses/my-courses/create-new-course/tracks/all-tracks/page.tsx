'use client';

import { Button, Card } from '@/components/core';
import Text from '@/components/core/Text';
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
    const [currentCourse, setCurrentCourse] = useState<LibraryContentCourse>({
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

    const handleEditTrackClick = () => {
        router.push(
            `/${lang}/courses/my-courses/create-new-course/tracks/edit`,
        );
    };

    const handleDeleteTrackClick = (id: string) => {
        const newTracks = currentCourse.tracks.filter(track => track.id !== id);

        const newCurrentCourse = {
            ...currentCourse,
            tracks: newTracks,
        };

        setCurrentCourse(newCurrentCourse);
        localStorage.setItem('currentCourse', JSON.stringify(newCurrentCourse));
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
            {!currentCourse.tracks && (
                <Button
                    label='Add First Track'
                    className='w-fit'
                    onClick={handleAddTrackClick}
                />
            )}
            <div className='flex flex-col gap-4 justify-center items-center'>
                {currentCourse.tracks.map((track, index) => {
                    const { id, title, mainSubject, sections } = track;
                    return (
                        <div key={index}>
                            <Card className='flex flex-col p-4 min-w-full min-h-[150px] border-4'>
                                <Text>{title}</Text>
                                <Text>{mainSubject}</Text>
                                <Text>{sections?.length} sections</Text>
                                <Text>ID: {id}</Text>
                            </Card>
                            <div className='flex gap-2'>
                                <Button
                                    label='Add Track'
                                    className='w-fit'
                                    onClick={handleAddTrackClick}
                                />
                                <Button
                                    label='Edit Track'
                                    className='w-fit'
                                    onClick={handleEditTrackClick}
                                />
                                <Button
                                    label='Delete Track'
                                    className='w-fit'
                                    onClick={() => handleDeleteTrackClick(id)}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Page;
