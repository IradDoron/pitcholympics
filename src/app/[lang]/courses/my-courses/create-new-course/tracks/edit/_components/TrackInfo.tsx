import { Input } from '@/components/core';
import Text from '@/components/core/Text';
import { CourseTrack } from '@/types/libraryPageTypes/libraryContentCourse';
import { Dispatch, SetStateAction } from 'react';

type Props = {
    currentTrack: CourseTrack;
    setCurrentTrack: Dispatch<SetStateAction<CourseTrack>>;
};

export const TrackInfo = ({ currentTrack, setCurrentTrack }: Props) => {
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
    return (
        <section>
            <Text>
                Track ID: <span>{currentTrack.id}</span>
            </Text>
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
                        <Text className='w-fit'>{currentTrack.required}</Text>
                    </span>
                </div>

                {currentTrack.required ? (
                    <select onChange={e => handleFieldChange(e, 'required')}>
                        <option value='false'>false</option>
                        <option value='true'>true</option>{' '}
                    </select>
                ) : (
                    <select onChange={e => handleFieldChange(e, 'required')}>
                        <option value='true'>true</option>
                        <option value='false'>false</option>
                    </select>
                )}
            </div>
        </section>
    );
};
