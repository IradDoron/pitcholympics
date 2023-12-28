'use client';

import { Locale } from '@/i18n.config';
import { Link, Text } from '@core';
import { getCurrentTab } from '@utils';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

type Props = {
    children: React.ReactNode;
    params: {
        lang: Locale;
    };
};

const Layout = ({ children, params }: Props) => {
    const pathname = usePathname();
    const { lang } = params;
    const currentTab = getCurrentTab(pathname);
    const pathSegments = pathname.split('/');
    useEffect(() => {
        const currentCourse = localStorage.getItem('currentCourse');
        if (!currentCourse) {
            localStorage.setItem('currentCourse', JSON.stringify({}));
        }
    }, []);

    return (
        <div>
            <Text className='text-3xl text-center'>Create New Course</Text>
            <section className='flex flex-row gap-2 justify-center'>
                <Link
                    url={`/${lang}/courses/my-courses/create-new-course/info`}
                    label='Info'
                    color={currentTab === 'info' ? 'secondary' : 'primary'}
                />
                <Link
                    url={`/${lang}/courses/my-courses/create-new-course/tracks/all-tracks`}
                    label='Tracks'
                    color={
                        pathSegments[pathSegments.length - 2] === 'tracks'
                            ? 'secondary'
                            : 'primary'
                    }
                />
                <Link
                    url={`/${lang}/courses/my-courses/create-new-course/syllabus`}
                    label='Syllabus'
                    color={currentTab === 'syllabus' ? 'secondary' : 'primary'}
                />
                <Link
                    url={`/${lang}/courses/my-courses/create-new-course/preview`}
                    label='Preview'
                    color={
                        pathSegments[pathSegments.length - 1] === 'preview' &&
                        pathSegments[pathSegments.length - 2] !== 'tracks'
                            ? 'secondary'
                            : 'primary'
                    }
                />
            </section>
            {children}
        </div>
    );
};

export default Layout;
