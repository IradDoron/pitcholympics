import { Link } from '@/components/core';
import Text from '@/components/core/Text';
import { LibraryContentCourse } from '@/types/libraryPageTypes';
import { countLessonsInCourse } from '@/utils';

type Props = {
    courseId: string;
    courses: LibraryContentCourse[];
};

const CourseCard = ({ courseId, courses }: Props) => {
    const course = courses.find(course => course.id === courseId);
    if (!course) {
        return <div>Course not found</div>;
    }

    const { title: courseTitle, description: courseDescription } = course;

    return (
        <div className='border-4 border-gray-700  p-6 w-[360px] min-h-[260px] flex  flex-col justify-between'>
            <div>
                <Text className='text-2xl'>{courseTitle}</Text>
                <Text className='text-lg'>{courseDescription}</Text>
            </div>
            <div className='flex gap-4 justify-center items-center'>
                <Text className='bg-slate-500 w-12 h-12 flex justify-center items-center rounded-[50%] text-xl'>
                    {countLessonsInCourse(course)}
                </Text>
                <Link url='#' label='Edit' />
                <Link url='#' label='Watch' />
            </div>
        </div>
    );
};

export default CourseCard;
