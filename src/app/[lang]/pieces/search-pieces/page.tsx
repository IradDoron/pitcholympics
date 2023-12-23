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
        <>
            <h1>Search Pieces</h1>
            <div className='flex gap-4 m-4'>
                <Link
                    url={`/${lang}/pieces/1`}
                    label='נכון להיום - זוהר ארגוב'
                />
                <Link url={`/${lang}/pieces/2`} label='תרגיל לפסנתר' />
                <Link url={`/${lang}/pieces/3`} label='ואיך שלא' />
            </div>
        </>
    );
};

export default Page;
