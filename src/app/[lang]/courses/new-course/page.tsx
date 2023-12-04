import { Locale } from '@/i18n.config';
import Link from '@core/link';

type Props = {
    params: {
        lang: Locale;
    };
};

const Page = ({ params }: Props) => {
    const { lang } = params;
    return (
        <div>
            <h1>New Course</h1>
            <Link
                label='Search Course Form'
                url={`/${lang}/courses/new-course/search-course-form`}
            />
            <Link label='Back' url={`/${lang}/courses`} />
        </div>
    );
};

export default Page;
