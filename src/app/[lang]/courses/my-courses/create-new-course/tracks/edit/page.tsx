'use client';

import { Button, Input } from '@/components/core';
import Text from '@/components/core/Text';
import CourseTrackSectionEditor from '@/components/shared/trackSectionEditor';
import {
    CourseSection,
    CourseTrack,
} from '@/types/libraryPageTypes/libraryContentCourse';
import { useEffect, useState } from 'react';

const Page = () => {
    const [currentTrack, setCurrentTrack] = useState<CourseTrack>({
        id: '',
        title: '',
        mainSubject: '',
        sections: [],
        required: false,
        parentId: '',
    });

    const handleFieldChange = (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLSelectElement>,
        field: string,
    ) => {
        const currentTrack = JSON.parse(
            localStorage.getItem('currentTrack') || 'null',
        );
        const newField = e.target.value;
        const newTrack = { ...currentTrack, [field]: newField };
        setCurrentTrack(newTrack);
        localStorage.setItem('currentTrack', JSON.stringify(newTrack));
    };

    const handleAddSectionClick = () => {
        const currentTrack = JSON.parse(
            localStorage.getItem('currentTrack') || 'null',
        );

        let initSectionId = '1';

        if (currentTrack) {
            initSectionId = String(currentTrack.sections.length + 1);
        }

        const initTrackSection: CourseSection = {
            id: initSectionId,
            title: '',
            description: '',
            lessons: [],
        };

        const newSections = [...currentTrack.sections, initTrackSection];
        const newTrack = { ...currentTrack, sections: newSections };
        localStorage.setItem('currentTrack', JSON.stringify(newTrack));
        setCurrentTrack(newTrack);
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
    }, []);

    return (
        <div>
            <section>
                <label>
                    <span>
                        <Text>Track title:</Text>
                    </span>
                    <Input
                        onChange={e => handleFieldChange(e, 'title')}
                        className='w-auto min-w-[200px]'
                        value={currentTrack.title}
                    />
                </label>
                <label>
                    <span>
                        <Text>Main subject:</Text>
                    </span>
                    <Input
                        onChange={e => handleFieldChange(e, 'mainSubject')}
                        className='w-auto min-w-[200px]'
                        value={currentTrack.mainSubject}
                    />
                </label>
                <div>
                    <div className='flex flex-row justify-center items-center w-fit gap-2'>
                        <span>
                            <Text className='w-fit'>Required:</Text>
                        </span>
                        <span>
                            <Text className='w-fit'>
                                {currentTrack.required}
                            </Text>
                        </span>
                    </div>

                    {currentTrack.required ? (
                        <select
                            onChange={e => handleFieldChange(e, 'required')}>
                            <option value='false'>false</option>
                            <option value='true'>true</option>{' '}
                        </select>
                    ) : (
                        <select
                            onChange={e => handleFieldChange(e, 'required')}>
                            <option value='true'>true</option>
                            <option value='false'>false</option>
                        </select>
                    )}
                </div>
            </section>
            <div>
                <h2 className='text-xl'>Sections:</h2>
                {currentTrack.sections.map((section, index) => {
                    const { id } = section;
                    return (
                        <CourseTrackSectionEditor
                            key={id}
                            sectionIndex={index}
                            currentTrack={currentTrack}
                            setCurrentTrack={setCurrentTrack}
                        />
                    );
                })}
            </div>
            <Button
                label='Add Section'
                className='w-fit'
                onClick={handleAddSectionClick}
            />
        </div>
    );
};

export default Page;
