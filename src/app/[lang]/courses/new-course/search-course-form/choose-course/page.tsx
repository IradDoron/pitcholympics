import { Locale } from '@/i18n.config';
import { Link } from '@core';
import Text from '@/components/core/Text';
import CoursesOptionsItem from '../../_components/coursesOptionsItem';
type Props = {
    params: {
        lang: Locale;
    };
};

const Page = ({ params }: Props) => {
    const { lang } = params;
    return (
        <div className='flex flex-col justify-center items-center gap-6'>
            <CoursesOptionsItem name='הקורס המומלץ ביותר!' />
            <div className='flex w-[700px]  flex-row items-center justify-center h-1/2 gap-20'>
                <CoursesOptionsItem name='קורס מומלץ!' />
                <CoursesOptionsItem name='קורס מומלץ!' />
                <CoursesOptionsItem name='קורס מומלץ!' />
            </div>
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
