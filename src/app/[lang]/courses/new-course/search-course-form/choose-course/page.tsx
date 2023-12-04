import { Locale } from '@/i18n.config';
import { Link } from '@core';

type Props = {
    params: {
        lang: Locale;
    };
};

const Page = ({ params }: Props) => {
    const { lang } = params;
    return (
        <div>
            <h1>Choose Course</h1>
            <Link
                label='Syllabus'
                url={`/${lang}/courses/new-course/search-course-form/choose-course/syllabus/1`}
            />
            <Link
                label='Back'
                url={`/${lang}/courses/new-course/search-course-form`}
            />
        </div>
    );
};

export default Page;
