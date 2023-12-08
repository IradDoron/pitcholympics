'use client';

import { Input } from '@/components/core';
import Text from '@/components/core/Text';
import { CourseTrack } from '@/types/libraryPageTypes/libraryContentCourse';
import { useEffect, useState } from 'react';

const Page = () => {
    const [currentTrackState, setCurrentTrackState] = useState<CourseTrack>({
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
        setCurrentTrackState(newTrack);
        localStorage.setItem('currentTrack', JSON.stringify(newTrack));
    };

    useEffect(() => {
        const currentTrack = JSON.parse(
            localStorage.getItem('currentTrack') || 'null',
        );

        if (!currentTrack) {
            localStorage.setItem(
                'currentTrack',
                JSON.stringify(currentTrackState),
            );
            return;
        }
        setCurrentTrackState(currentTrack);
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
                        value={currentTrackState.title}
                    />
                </label>
                <label>
                    <span>
                        <Text>Main subject:</Text>
                    </span>
                    <Input
                        onChange={e => handleFieldChange(e, 'mainSubject')}
                        className='w-auto min-w-[200px]'
                        value={currentTrackState.mainSubject}
                    />
                </label>
                <div>
                    <div className='flex flex-row justify-center items-center w-fit gap-2'>
                        <span>
                            <Text className='w-fit'>Required:</Text>
                        </span>
                        <span>
                            <Text className='w-fit'>
                                {currentTrackState.required}
                            </Text>
                        </span>
                    </div>

                    {currentTrackState.required ? (
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
            <section>
                <h2>
                    <Text className='text-xl w-fit inline'>
                        Section Number:
                    </Text>{' '}
                    <Text className='text-xl w-fit inline'>1</Text>
                </h2>
            </section>
        </div>
    );
};

export default Page;
