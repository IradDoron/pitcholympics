'use client';

import { Button } from '@/components/core';
import CourseCard from '@/components/shared/courseCard';
import courses from '@/mockData/courses';

const Page = () => {
    const handleCreateNewCourseClick = () => {};
    return (
        <div>
            <h1>My Courses Page</h1>
            <Button
                label='Create new course'
                onClick={handleCreateNewCourseClick}
            />
            <section>
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
