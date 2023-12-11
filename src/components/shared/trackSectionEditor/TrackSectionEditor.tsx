'use client';

import {
    CourseLesson,
    CourseSection,
    CourseTrack,
} from '@/types/libraryPageTypes/libraryContentCourse';
import { Button, Input, Text } from '@core';
import { TrackLessonEditor } from '@shared';
import { useEffect, useState } from 'react';

type Props = {
    sectionIndex: number;
    currentTrack: CourseTrack;
    setCurrentTrack: React.Dispatch<React.SetStateAction<CourseTrack>>;
};

export const TrackSectionEditor = ({
    sectionIndex,
    currentTrack,
    setCurrentTrack,
}: Props) => {
    const [currentSection, setCurrentSection] = useState<CourseSection>({
        id: '',
        title: '',
        description: '',
        lessons: [],
    });

    const handleDeleteSectionClick = () => {
        // get sections array from track object
        const { sections } = currentTrack;

        // create deep copy of sections array
        const newSections = [...sections];

        // remove section from sections array
        const sectionBeforeIndex = newSections.slice(0, sectionIndex);
        const sectionAfterIndex = newSections.slice(sectionIndex + 1);
        const newSectionsWithoutSection = [
            ...sectionBeforeIndex,
            ...sectionAfterIndex,
        ];

        // create new track object with new sections array
        const newTrack = {
            ...currentTrack,
            sections: newSectionsWithoutSection,
        };

        // set sections array in track object
        setCurrentTrack(newTrack);

        // set track object in local storage
        localStorage.setItem('currentTrack', JSON.stringify(newTrack));
    };

    const handleFieldChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        field: string,
        sectionIndex: number,
    ) => {
        const currentTrack = JSON.parse(
            localStorage.getItem('currentTrack') || 'null',
        );
        const newValue = e.target.value;
        const newSection = {
            ...currentTrack.sections[sectionIndex],
            [field]: newValue,
        };
        setCurrentSection(newSection);
        const newSections = currentTrack.sections.map(
            (section: CourseSection, index: number) => {
                if (index === sectionIndex) {
                    return newSection;
                }
                return section;
            },
        );
        const newTrack = { ...currentTrack, sections: newSections };
        setCurrentTrack(newTrack);
        localStorage.setItem('currentTrack', JSON.stringify(newTrack));
    };

    const handleAddLessonClick = () => {
        // generate lesson id
        const lessonId = String(currentSection.lessons.length + 1);

        // define a new initial lesson
        const initLesson: CourseLesson = {
            id: lessonId,
            title: 'lesson title',
            description: 'lesson description',
            modulesIds: [],
        };

        // get deep copy of section lessons array
        const newLessons = [...currentSection.lessons];

        // add new lesson to lessons array
        newLessons.push(initLesson);

        // create new section object with new lessons array
        const newSection = {
            ...currentSection,
            lessons: newLessons,
        };

        // update current section
        setCurrentSection(newSection);

        // get deep copy of current track
        const newTrack = { ...currentTrack };

        // update current track with new section
        newTrack.sections[sectionIndex] = newSection;

        // set current track
        setCurrentTrack(newTrack);

        // set current track in local storage
        localStorage.setItem('currentTrack', JSON.stringify(newTrack));
    };

    useEffect(() => {
        const currentTrack = JSON.parse(
            localStorage.getItem('currentTrack') || 'null',
        );
        if (!currentTrack) {
            localStorage.setItem('currentTrack', JSON.stringify(currentTrack));
            return;
        }
        setCurrentTrack(currentTrack);
        setCurrentSection(currentTrack.sections[sectionIndex]);
    }, []);

    return (
        <div className='debug my-8'>
            <h3>Title: {currentTrack.sections[sectionIndex].title}</h3>
            <p>ID: {currentTrack.sections[sectionIndex].id} </p>
            <section>
                <h2>
                    <Text className='text-xl w-fit inline'>
                        Section Number:
                    </Text>{' '}
                    <Text className='text-xl w-fit inline'>
                        {sectionIndex + 1}
                    </Text>
                </h2>
                <label className='block'>
                    <Text className='text-xl w-fit inline'>Title:</Text>
                    <Input
                        value={currentSection.title}
                        onChange={e =>
                            handleFieldChange(e, 'title', sectionIndex)
                        }
                    />
                </label>
                <label className='block'>
                    <Text className='text-xl w-fit inline'>Description:</Text>
                    <Input
                        value={currentSection.description}
                        onChange={e =>
                            handleFieldChange(e, 'description', sectionIndex)
                        }
                    />
                </label>
            </section>
            <section>
                <h3 className='text-lg'>Lessons:</h3>
                <div>
                    {currentSection.lessons.map((lesson, index) => {
                        return (
                            <TrackLessonEditor
                                key={index}
                                lessonIndex={index}
                                sectionIndex={sectionIndex}
                                currentTrack={currentTrack}
                                setCurrentTrack={setCurrentTrack}
                                currentSection={currentSection}
                                setCurrentSection={setCurrentSection}
                            />
                        );
                    })}
                </div>
                <Button label='Add Lesson' onClick={handleAddLessonClick} />
            </section>
            <Button label='Delete Section' onClick={handleDeleteSectionClick} />
        </div>
    );
};
