import { LibraryContentCourse } from '@/types/libraryPageTypes';
import { Text } from '@core';
import Image from 'next/image';

type Props = {
    currentCourseState: LibraryContentCourse;
};

export const InfoDisplay = ({ currentCourseState }: Props) => {
    const {
        id,
        title,
        description,
        imageURL,
        mainSubject,
        tags,
        prerequisites,
    } = currentCourseState;
    return (
        <div className='flex flex-col items-center justify-center gap-2'>
            <Text className='text-2xl text-center'>{title}</Text>
            <Text className='text-lg text-center'>ID: {id}</Text>
            <Text className='text-lg text-center bg-light-surface-primary text-light-surface-onPrimary dark:bg-dark-surface-primary dark:text-dark-surface-onPrimary border-2 border-light-primary-main dark:border-dark-primary-main rounded-md px-4 py-2'>
                Main Subject: {mainSubject}
            </Text>
            <Text className='text-lg text-center w-[26ch]'>{description}</Text>
            <Image src={imageURL} alt={title} width={300} height={300} />
            <div className='flex flex-row gap-2'>
                {tags?.map(tag => (
                    <Text
                        key={tag}
                        className='text-lg text-center bg-light-surface-primary text-light-surface-onPrimary dark:bg-dark-surface-primary dark:text-dark-surface-onPrimary border-2 border-light-primary-main dark:border-dark-primary-main rounded-md px-4 py-2'>
                        {tag}
                    </Text>
                ))}
            </div>
            <div className='flex flex-col gap-2'>
                <Text className='text-lg text-center'>Prerequisites:</Text>
                <ul className='list-disc'>
                    {prerequisites?.map((prerequisite, index) => (
                        <li key={index}>
                            <Text key={prerequisite}>{prerequisite}</Text>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
