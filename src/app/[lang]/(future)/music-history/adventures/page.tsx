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
            <h1>Adventures</h1>
            <Link
                url={`/${lang}/music-history/adventures/1`}
                label='Adventure 1'
            />
        </>
    );
};

export default Page;
