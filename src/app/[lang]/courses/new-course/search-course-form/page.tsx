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
            <h1>Search Course Form</h1>
            <Link
                label='Choose Course'
                url={`/${lang}/courses/new-course/search-course-form/choose-course`}
            />
            <Link label='Back' url={`/${lang}/courses/new-course`} />
        </div>
    );
};

export default Page;
