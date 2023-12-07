'use client';

import { Link } from '@/components/core';
import Text from '@/components/core/Text';
import { Locale } from '@/i18n.config';
import { getCurrentTab } from '@/utils';
import { usePathname } from 'next/navigation';

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

    return (
        <div>
            <Text className='text-3xl text-center'>My Courses Page</Text>
            <section className='flex flex-row gap-2 justify-center'>
                <Link
                    url={`/${lang}/courses/my-courses/create-new-course/info`}
                    label='Info'
                    color={currentTab === 'info' ? 'secondary' : 'primary'}
                />
                <Link
                    url={`/${lang}/courses/my-courses/create-new-course/syllabus`}
                    label='Syllabus'
                    color={currentTab === 'syllabus' ? 'secondary' : 'primary'}
                />
                <Link
                    url={`/${lang}/courses/my-courses/create-new-course/preview`}
                    label='Preview'
                    color={currentTab === 'preview' ? 'secondary' : 'primary'}
                />
                <Link
                    url={`/${lang}/courses/my-courses/create-new-course/course-stages`}
                    label='Course Stages'
                    color={
                        currentTab === 'course-stages' ? 'secondary' : 'primary'
                    }
                />
            </section>
            {children}
        </div>
    );
};

export default Layout;
