'use client';

import {
    CourseLesson,
    CourseSection,
    CourseTrack,
} from '@/types/libraryPageTypes/libraryContentCourse';
import { Button, Input, Text } from '@core';
import { useEffect, useState } from 'react';

type Props = {
    lessonIndex: number;
    sectionIndex: number;
    currentTrack: CourseTrack;
    setCurrentTrack: React.Dispatch<React.SetStateAction<CourseTrack>>;
    currentSection: CourseSection;
    setCurrentSection: React.Dispatch<React.SetStateAction<CourseSection>>;
};

export const TrackLessonEditor = ({
    lessonIndex,
    sectionIndex,
    currentTrack,
    setCurrentTrack,
    currentSection,
    setCurrentSection,
}: Props) => {
    const [currentLesson, setCurrentLesson] = useState<CourseLesson>({
        id: '',
        title: 'lesson title',
        description: 'lesson description',
        modulesIds: [],
    });

    const [currentModuleId, setCurrentModuleId] = useState<string>('');

    const handleFieldChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        field: string,
        sectionIndex: number,
    ) => {
        // new value
        const newValue = e.target.value;

        // update current lesson
        setCurrentLesson({ ...currentLesson, [field]: newValue });

        // get deep copy of sections array
        const newSections = [...currentTrack.sections];

        // get section to update
        const sectionToUpdate = newSections[sectionIndex];

        // get deep copy of lessons array
        const newLessons = [...sectionToUpdate.lessons];

        // get lesson to update
        const lessonToUpdate = newLessons[lessonIndex];

        // update lesson with new value
        const newLesson = { ...lessonToUpdate, [field]: newValue };

        // update lesson in lessons array
        const newLessonsWithUpdatedLesson = [
            ...newLessons.slice(0, lessonIndex),
            newLesson,
            ...newLessons.slice(lessonIndex + 1),
        ];

        // update section with new lessons array
        const newSection = {
            ...sectionToUpdate,
            lessons: newLessonsWithUpdatedLesson,
        };

        // create new sections array with updated section
        const newSectionsWithUpdatedSection = [
            ...newSections.slice(0, sectionIndex),
            newSection,
            ...newSections.slice(sectionIndex + 1),
        ];

        // create new track object with updated sections array
        const newTrack = {
            ...currentTrack,
            sections: newSectionsWithUpdatedSection,
        };

        // update current track
        setCurrentTrack(newTrack);

        // update local storage
        localStorage.setItem('currentTrack', JSON.stringify(newTrack));
    };

    const handleCurrnetModuleIdChange = (
        e: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setCurrentModuleId(e.target.value);
    };

    const handleDeleteLessonClick = () => {
        // get deep copy of lessons array
        const newLessons = [...currentTrack.sections[sectionIndex].lessons];

        // get lessons before the lesson to delete
        const lessonBeforeIndex = newLessons.slice(0, lessonIndex);

        // get lessons after the lesson to delete
        const lessonAfterIndex = newLessons.slice(lessonIndex + 1);

        // create new lessons array without the lesson to delete
        const newLessonsWithoutLesson = [
            ...lessonBeforeIndex,
            ...lessonAfterIndex,
        ];

        // get deep copy of sections array
        const newSections = [...currentTrack.sections];

        // get section to update
        const sectionToUpdate = newSections[sectionIndex];

        // update section with new lessons array
        const newSection = {
            ...sectionToUpdate,
            lessons: newLessonsWithoutLesson,
        };

        setCurrentSection(newSection);

        // create new sections array with updated section
        const newSectionsWithUpdatedSection = [
            ...newSections.slice(0, sectionIndex),
            newSection,
            ...newSections.slice(sectionIndex + 1),
        ];

        // create new track object with updated sections array
        const newTrack = {
            ...currentTrack,
            sections: newSectionsWithUpdatedSection,
        };

        // update current track
        setCurrentTrack(newTrack);

        // update local storage
        localStorage.setItem('currentTrack', JSON.stringify(newTrack));
    };

    const handleAddNewModuleId = () => {
        // get modules ids array from current lesson with the new module id
        const newModulesIds = [...currentLesson.modulesIds, currentModuleId];

        // update current lesson with new modules ids array
        setCurrentLesson({ ...currentLesson, modulesIds: newModulesIds });

        // reset current module id
        setCurrentModuleId('');

        // get deep copy of sections array
        const newSections = [...currentTrack.sections];

        // get section to update
        const sectionToUpdate = newSections[sectionIndex];

        // get deep copy of lessons array
        const newLessons = [...sectionToUpdate.lessons];

        // get lesson to update
        const lessonToUpdate = newLessons[lessonIndex];

        // update lesson with new modules ids array
        const newLesson = { ...lessonToUpdate, modulesIds: newModulesIds };

        // update lesson in lessons array
        const newLessonsWithUpdatedLesson = [
            ...newLessons.slice(0, lessonIndex),
            newLesson,
            ...newLessons.slice(lessonIndex + 1),
        ];

        // update section with new lessons array
        const newSection = {
            ...sectionToUpdate,
            lessons: newLessonsWithUpdatedLesson,
        };

        // create new sections array with updated section
        const newSectionsWithUpdatedSection = [
            ...newSections.slice(0, sectionIndex),
            newSection,
            ...newSections.slice(sectionIndex + 1),
        ];

        // create new track object with updated sections array
        const newTrack = {
            ...currentTrack,
            sections: newSectionsWithUpdatedSection,
        };

        // update current track
        setCurrentTrack(newTrack);

        // update local storage
        localStorage.setItem('currentTrack', JSON.stringify(newTrack));
    };

    useEffect(() => {
        const currentTrack = JSON.parse(
            localStorage.getItem('currentTrack') || 'null',
        );

        if (!currentTrack) {
            const initLessonObject: CourseLesson = {
                id: '',
                title: 'lesson title',
                description: 'lesson description',
                modulesIds: [],
            };
            setCurrentLesson(initLessonObject);
            return;
        }
        const currentSection = currentTrack.sections[sectionIndex];
        const currentLesson = currentSection.lessons[lessonIndex];
        setCurrentLesson(currentLesson);
    }, []);

    return (
        <div className='debug-blue my-4'>
            <h2>
                <Text className='text-xl w-fit inline'>Lesson Number:</Text>{' '}
                <Text className='text-xl w-fit inline'>{lessonIndex + 1}</Text>
            </h2>
            <label className='block'>
                <Text className='text-xl w-fit inline'>Title:</Text>
                <Input
                    value={currentLesson.title}
                    onChange={e => handleFieldChange(e, 'title', sectionIndex)}
                />
            </label>
            <label className='block'>
                <Text className='text-xl w-fit inline'>Description:</Text>
                <Input
                    value={currentLesson.description}
                    onChange={e =>
                        handleFieldChange(e, 'description', sectionIndex)
                    }
                />
            </label>
            <label className='block'>
                <Text className='text-xl w-fit inline'>New module ID:</Text>
                <Input
                    value={currentModuleId}
                    onChange={handleCurrnetModuleIdChange}
                />
            </label>
            <Button
                label='Add Module'
                className='w-fit'
                onClick={handleAddNewModuleId}
            />
            <ul>
                {currentLesson.modulesIds.map(moduleId => (
                    <li key={moduleId}>{moduleId}</li>
                ))}
            </ul>
            <Button
                label='Delete Lesson'
                className='w-fit'
                onClick={handleDeleteLessonClick}
            />
        </div>
    );
};
