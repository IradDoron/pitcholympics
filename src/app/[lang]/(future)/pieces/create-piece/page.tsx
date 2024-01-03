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
            <h1>Create Piece</h1>
            <Link
                url={`/${lang}/pieces/create-piece/abc-editor`}
                label='ABC Editor'
            />
        </>
    );
};

export default Page;
