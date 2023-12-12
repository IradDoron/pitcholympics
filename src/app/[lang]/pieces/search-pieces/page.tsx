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
            <Link url={`/${lang}/pieces/1`} label='Piece 1' />
        </>
    );
};

export default Page;
