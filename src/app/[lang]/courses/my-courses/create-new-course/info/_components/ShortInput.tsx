import { LibraryContentCourse } from '@/types/libraryPageTypes';
import { Input, Text } from '@core';

type Props = {
    label: 'id' | 'title' | 'description' | 'imageURL' | 'mainSubject';
    handleFieldChange: (
        // eslint-disable-next-line no-unused-vars
        e: React.ChangeEvent<HTMLInputElement>,
        // eslint-disable-next-line no-unused-vars
        field: 'id' | 'title' | 'description' | 'imageURL' | 'mainSubject',
    ) => void;
    currentCourseState: LibraryContentCourse;
};

export const ShortInput = ({
    label,
    handleFieldChange,
    currentCourseState,
}: Props) => {
    return (
        <label className='flex flex-col items-center justify-center w-full px-16 py-4'>
            <span>
                <Text className='text-lg text-center'>{label}:</Text>
            </span>
            <Input
                onChange={e => handleFieldChange(e, label)}
                className='w-full text-center'
                value={currentCourseState[label]}
            />
        </label>
    );
};
