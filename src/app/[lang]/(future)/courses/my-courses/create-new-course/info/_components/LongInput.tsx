import { Text } from '@core';
import { LibraryContentCourse } from '@types';

type Props = {
    label: 'id' | 'title' | 'description' | 'imageURL' | 'mainSubject';
    handleFieldChange: (
        // eslint-disable-next-line no-unused-vars
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>,
        // eslint-disable-next-line no-unused-vars
        field: 'id' | 'title' | 'description' | 'imageURL' | 'mainSubject',
    ) => void;
    currentCourseState: LibraryContentCourse;
};

export const LongInput = ({
    label,
    handleFieldChange,
    currentCourseState,
}: Props) => {
    return (
        <label className='flex flex-col items-center justify-center w-full  px-16 py-4'>
            <span>
                <Text className='text-lg text-center'>{label}:</Text>
            </span>
            <textarea
                className='w-full text-center border border-light-primary-dark p-1 rounded-md dark:bg-dark-primary-main dark:text-dark-primary-contrastText dark:placeholder:text-dark-surface-secondary'
                onChange={e => handleFieldChange(e, label)}
                value={currentCourseState[label]}
            />
        </label>
    );
};
