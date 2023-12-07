'use client';

import { Button } from '@/components/core';
import Text from '@/components/core/Text';
import CourseCard from '@/components/shared/courseCard';
import { Locale } from '@/i18n.config';
import courses from '@/mockData/courses';
import { useRouter } from 'next/navigation';

type Props = {
    params: {
        lang: Locale;
    };
};

const Page = ({ params }: Props) => {
    const router = useRouter();
    const { lang } = params;
    const handleCreateNewCourseClick = () => {
        router.push(`/${lang}/courses/my-courses/create-new-course/info`);
    };
    return (
        <div className='flex flex-col gap-6 items-center'>
            <Text className='text-3xl text-center'>My Courses Page</Text>
            <Button
                label='Create new course'
                onClick={handleCreateNewCourseClick}
                className='w-fit'
            />
            <section className='flex gap-4'>
                {courses.map(course => {
                    const { id } = course;

                    return (
                        <CourseCard key={id} courseId={id} courses={courses} />
                    );
                })}
            </section>
        </div>
    );
};

export default Page;
