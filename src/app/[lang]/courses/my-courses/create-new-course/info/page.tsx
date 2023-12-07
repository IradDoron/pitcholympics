'use client';

import { Button, Input } from '@/components/core';
import Text from '@/components/core/Text';
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
    }, []);

    const handleFieldChange = (
        e: React.ChangeEvent<HTMLInputElement>,
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
        <div>
            <label>
                <span>
                    <Text>Course Title:</Text>
                </span>
                <Input
                    onChange={e => handleFieldChange(e, 'title')}
                    className='w-auto min-w-[200px]'
                    value={currentCourseState.title}
                />
            </label>
            <label>
                <span>
                    <Text>Main subject:</Text>
                </span>
                <Input
                    onChange={e => handleFieldChange(e, 'mainSubject')}
                    className='w-auto min-w-[200px]'
                    value={currentCourseState.mainSubject}
                />
            </label>
            <label>
                <span>
                    <Text>Description:</Text>
                </span>
                <Input
                    onChange={e => handleFieldChange(e, 'description')}
                    className='w-auto min-w-[200px]'
                    value={currentCourseState.description}
                />
            </label>
            <label>
                <span>
                    <Text>Image URL:</Text>
                </span>
                <Input
                    onChange={e => handleFieldChange(e, 'imageURL')}
                    className='w-auto min-w-[200px]'
                    value={currentCourseState.imageURL}
                />
            </label>
            <label>
                <span>
                    <Text>New tag:</Text>
                </span>
                <Input
                    onChange={handleCurrentTagChange}
                    className='w-auto min-w-[200px]'
                    value={currentTag}
                />
                <Button onClick={handleAddTagClick} label='Add Tag' />
                <div>
                    {currentCourseState.tags?.map((tag: string) => (
                        <div key={tag}>
                            <Text>{tag}</Text>
                        </div>
                    ))}
                </div>
            </label>
            <label>
                <span>
                    <Text>New prerequisite:</Text>
                </span>
                <Input
                    onChange={handleCurrentPrerequisiteChange}
                    className='w-auto min-w-[200px]'
                    value={currentPrerequisite}
                />
                <Button
                    onClick={handleAddPrerequisiteClick}
                    label='Add Prerequisite'
                />
                <div>
                    {currentCourseState.prerequisites?.map(
                        (prerequisite: string) => (
                            <div key={prerequisite}>
                                <Text>{prerequisite}</Text>
                            </div>
                        ),
                    )}
                </div>
            </label>
        </div>
    );
};

export default Page;
