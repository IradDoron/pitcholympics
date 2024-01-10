'use client';

import { Locale } from '@/i18n.config';
import { Button, Card, Text } from '@core';
import { CourseTrack, LibraryContentCourse } from '@types';
import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction } from 'react';

type Props = {
    track: CourseTrack;
    params: {
        lang: Locale;
    };
    currentCourse: LibraryContentCourse;
    setCurrentCourse: Dispatch<SetStateAction<LibraryContentCourse>>;
};

export const TrackCard = ({
    track,
    params,
    currentCourse,
    setCurrentCourse,
}: Props) => {
    const { title, mainSubject, sections, id } = track;
    const { lang } = params;
    const router = useRouter();

    const handleAddTrackClick = () => {
        // get current course from localStorage
        const currentCourse = JSON.parse(
            localStorage.getItem('currentCourse') || 'null',
        ) as LibraryContentCourse;

        // get the highest id from tracks in current course
        const highestId = Math.max(
            ...currentCourse.tracks.map(track => Number(track.id)),
        );

        // create a new track with that id + 1
        const newTrack = {
            id: String(highestId + 1),
            title: 'New Track Title',
            mainSubject: 'New Track Main Subject',
            sections: [],
            required: false,
            parentId: '',
        } as CourseTrack;

        // save the new track in localStorage
        localStorage.setItem('currentTrack', JSON.stringify(newTrack));

        // navigate to edit track page
        router.push(
            `/${lang}/courses/my-courses/create-new-course/tracks/edit`,
        );
    };

    const handleEditTrackClick = () => {
        // get current course from localStorage
        const currentCourse = JSON.parse(
            localStorage.getItem('currentCourse') || 'null',
        ) as LibraryContentCourse;

        // get track with id
        const track = currentCourse.tracks.find(track => track.id === id);

        // save the track in localStorage
        localStorage.setItem('currentTrack', JSON.stringify(track));

        // navigate to edit track page
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

    return (
        <div>
            <Card>
                <div className='flex flex-col items-start'>
                    <Text>Title: {title}</Text>
                    <Text>Main Subject: {mainSubject}</Text>
                    <Text>Sections count: {sections?.length}</Text>
                    <Text>ID: {id}</Text>
                </div>
            </Card>
            <div className='flex gap-2'>
                <Button label='Add Track' onClick={handleAddTrackClick} />
                <Button label='Edit Track' onClick={handleEditTrackClick} />
                <Button
                    label='Delete Track'
                    onClick={() => handleDeleteTrackClick(id)}
                />
            </div>
        </div>
    );
};
