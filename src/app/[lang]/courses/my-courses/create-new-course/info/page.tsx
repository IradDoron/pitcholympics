'use client';

import { LibraryContentCourse } from '@/types/libraryPageTypes';
import { Text } from '@core';
import { useEffect, useState } from 'react';
import {
    InfoDisplay,
    LongInput,
    PrerequisitesInput,
    ShortInput,
    TagsInput,
} from './_components';

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

    const [currentTag, setCurrentTag] = useState('');
    const [currentTags, setCurrentTags] = useState<string[]>([]);
    const [currentPrerequisite, setCurrentPrerequisite] = useState<string>('');
    const [currentPrerequisites, setCurrentPrerequisites] = useState<string[]>(
        [],
    );

    useEffect(() => {
        const currentCourse = JSON.parse(
            localStorage.getItem('currentCourse') || 'null',
        );
        setCurrentCourseState(currentCourse);
        setCurrentTags(currentCourse?.tags || []);
        setCurrentPrerequisites(currentCourse.prerequisites || []);
    }, []);

    const handleFieldChange = (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>,
        field: string,
    ) => {
        const currentCourse = JSON.parse(
            localStorage.getItem('currentCourse') || 'null',
        );
        const newField = e.target.value;
        const newCourse = { ...currentCourse, [field]: newField };
        setCurrentCourseState(newCourse);
        localStorage.setItem('currentCourse', JSON.stringify(newCourse));
    };

    const handleCurrentTagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentTag(e.target.value);
    };

    const handleAddTagClick = () => {
        const currentCourse = JSON.parse(
            localStorage.getItem('currentCourse') || 'null',
        );
        const newTag = currentTag;
        const newTags = [...currentTags, newTag];
        const newCourse = { ...currentCourse, tags: newTags };
        setCurrentCourseState(newCourse);
        localStorage.setItem('currentCourse', JSON.stringify(newCourse));
        setCurrentTag('');
        setCurrentTags(newTags);
    };

    const handleCurrentPrerequisiteChange = (
        e: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setCurrentPrerequisite(e.target.value);
    };

    const handleAddPrerequisiteClick = () => {
        const currentCourse = JSON.parse(
            localStorage.getItem('currentCourse') || 'null',
        );
        const newPrerequisite = currentPrerequisite;
        const newPrerequisites = [...currentPrerequisites, newPrerequisite];
        const newCourse = {
            ...currentCourse,
            prerequisites: newPrerequisites,
        };
        setCurrentCourseState(newCourse);
        localStorage.setItem('currentCourse', JSON.stringify(newCourse));
        setCurrentPrerequisite('');
        setCurrentPrerequisites(newPrerequisites);
    };

    return (
        <div className='flex flex-col justify-center items-center gap-4 my-8 w-full'>
            <Text className='text-3xl text-center'>Info</Text>
            <InfoDisplay currentCourseState={currentCourseState} />
            <div className='flex flex-col justify-center items-center gap-4 my-8 w-full'>
                <ShortInput
                    label='title'
                    handleFieldChange={handleFieldChange}
                    currentCourseState={currentCourseState}
                />
                <ShortInput
                    label='mainSubject'
                    handleFieldChange={handleFieldChange}
                    currentCourseState={currentCourseState}
                />
                <LongInput
                    label='description'
                    handleFieldChange={handleFieldChange}
                    currentCourseState={currentCourseState}
                />
                <ShortInput
                    label='imageURL'
                    handleFieldChange={handleFieldChange}
                    currentCourseState={currentCourseState}
                />
            </div>

            <TagsInput
                handleCurrentTagChange={handleCurrentTagChange}
                currentTag={currentTag}
                handleAddTagClick={handleAddTagClick}
            />

            <PrerequisitesInput
                handleCurrentPrerequisiteChange={
                    handleCurrentPrerequisiteChange
                }
                currentPrerequisite={currentPrerequisite}
                handleAddPrerequisiteClick={handleAddPrerequisiteClick}
            />
        </div>
    );
};

export default Page;
