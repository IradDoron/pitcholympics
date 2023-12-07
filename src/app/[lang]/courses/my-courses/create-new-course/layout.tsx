import { Link } from '@/components/core';
import { Locale } from '@/i18n.config';

type Props = {
    children: React.ReactNode;
    params: {
        lang: Locale;
    };
};

const Layout = ({ children, params }: Props) => {
    const { lang } = params;
    return (
        <div>
            <h1>Create new course</h1>
            <div>
                <Link
                    url={`/${lang}/courses/my-courses/create-new-course/info`}
                    label='Info'
                />
                <Link
                    url={`/${lang}/courses/my-courses/create-new-course/syllabus`}
                    label='Syllabus'
                />
                <Link
                    url={`/${lang}/courses/my-courses/create-new-course/preview`}
                    label='Preview'
                />
                <Link
                    url={`/${lang}/courses/my-courses/create-new-course/course-stages`}
                    label='Course Stages'
                />
            </div>
            {children}
        </div>
    );
};

export default Layout;
