'use client';

import { Button } from '@/components/core';
import {
    CourseSection,
    CourseTrack,
} from '@/types/libraryPageTypes/libraryContentCourse';
import { useEffect, useState } from 'react';
import { TrackInfo, TrackSections } from './_components';

const Page = () => {
    const [currentTrack, setCurrentTrack] = useState<CourseTrack>({
        id: '1',
        title: 'Add track title',
        mainSubject: 'Add main subject',
        sections: [],
        required: false,
        parentId: '',
    });

    const handleAddSectionClick = () => {
        const currentTrack = JSON.parse(
            localStorage.getItem('currentTrack') || 'null',
        );

        let initSectionId = '1';

        if (currentTrack) {
            initSectionId = currentTrack.sections
                ? String(currentTrack.sections.length + 1)
                : '1';
        }

        const initTrackSection: CourseSection = {
            id: initSectionId,
            title: '',
            description: '',
            lessons: [],
        };

        let newSections = [];

        if (currentTrack.sections) {
            newSections = [...currentTrack.sections, initTrackSection];
        } else {
            newSections = [initTrackSection];
        }

        const newTrack = { ...currentTrack, sections: newSections };
        localStorage.setItem('currentTrack', JSON.stringify(newTrack));
        setCurrentTrack(newTrack);
    };

    useEffect(() => {
        const currentTrackStorage = JSON.parse(
            localStorage.getItem('currentTrack') || 'null',
        );

        const currentCourseStorage = JSON.parse(
            localStorage.getItem('currentCourse') || 'null',
        );

        let tracksCount = 0;

        if (currentCourseStorage) {
            tracksCount = currentCourseStorage.tracks.length;
        }

        let initTrackId = '1';

        if (tracksCount > 0) {
            initTrackId = String(tracksCount + 1);
        }

        const updateCurrentTrack: CourseTrack = {
            id: initTrackId,
            title: 'Add track title',
            mainSubject: 'Add main subject',
            sections: [],
            required: false,
            parentId: '',
        };

        const currentTrack = currentTrackStorage
            ? currentTrackStorage
            : updateCurrentTrack;

        if (!currentTrackStorage) {
            localStorage.setItem('currentTrack', JSON.stringify(currentTrack));
            return;
        }

        setCurrentTrack(currentTrack);
    }, []);

    return (
        <div>
            <TrackInfo
                currentTrack={currentTrack}
                setCurrentTrack={setCurrentTrack}
            />
            <TrackSections
                currentTrack={currentTrack}
                setCurrentTrack={setCurrentTrack}
            />

            <Button
                label='Add Section'
                className='w-fit'
                onClick={handleAddSectionClick}
            />
        </div>
    );
};

export default Page;
