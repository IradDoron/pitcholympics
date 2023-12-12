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
            <h1>Pieces</h1>
            <ul className='flex gap-4 m-4'>
                <li>
                    <Link
                        url={`/${lang}/pieces/search-pieces`}
                        label='Search Pieces'
                    />
                </li>
                <li>
                    <Link
                        url={`/${lang}/pieces/create-piece`}
                        label='Create Piece'
                    />
                </li>
            </ul>
        </>
    );
};

export default Page;
