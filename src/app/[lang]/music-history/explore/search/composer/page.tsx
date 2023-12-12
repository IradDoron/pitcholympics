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
            <h1>Search composer</h1>
            <Link
                url={`/${lang}/music-history/explore/composer/beethoven`}
                label='Beethoven'
            />
        </>
    );
};

export default Page;
