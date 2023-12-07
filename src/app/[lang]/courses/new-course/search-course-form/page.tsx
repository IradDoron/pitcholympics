import { Locale } from '@/i18n.config';
import { Link } from '@core';
import Text from '@/components/core/Text';
type Props = {
    params: {
        lang: Locale;
    };
};

const Page = ({ params }: Props) => {
    const { lang } = params;
    return (
        <div className='flex flex-col'>
           <div className='flex '>

           </div>
            <Link
                label='Choose Course'
                url={`/${lang}/courses/new-course/search-course-form/choose-course`}
            />
            <Link label='Back' url={`/${lang}/courses/new-course`} />
        </div>
    );
};

export default Page;
