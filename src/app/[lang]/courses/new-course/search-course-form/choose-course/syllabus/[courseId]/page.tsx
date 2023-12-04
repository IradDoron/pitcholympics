'use client';

import { Locale } from '@/i18n.config';
import Button from '@core/button';
import Link from '@core/link';

type Props = {
    params: {
        lang: Locale;
        courseId: string;
    };
};

const Page = ({ params }: Props) => {
    const { lang, courseId } = params;
    const handleClick = () => {
        alert(`handleClick: ${courseId}`);
    };

    return (
        <div>
            <h1>Syllabus</h1>
            <Button label='Choose Course' onClick={handleClick} />
            <Link
                label='Back'
                url={`/${lang}/courses/new-course/search-course-form/choose-course`}
            />
        </div>
    );
};

export default Page;
