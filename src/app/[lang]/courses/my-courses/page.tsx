'use client';

import { Locale } from '@/i18n.config';
import courses from '@/mockData/courses';
import { LibraryContentCourse } from '@/types/libraryPageTypes';
import { Button, Text } from '@core';
import { CourseCard } from '@shared';
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
        // get the highest id from courses
        const highestId = Math.max(...courses.map(course => Number(course.id)));

        // create a new course with that id + 1
        const newCourse = {
            id: String(highestId + 1),
            title: 'New Course Title',
            description: 'New Course Description',
            contentType: 'course',
            prerequisites: [],
            tracks: [],
            imageURL: 'https://picsum.photos/200',
            tags: [],
            mainSubject: 'New Course Main Subject',
        } as LibraryContentCourse;

        // save the new course in localStorage
        localStorage.setItem('currentCourse', JSON.stringify(newCourse));

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
