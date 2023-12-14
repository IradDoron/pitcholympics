import { Locale } from '@/i18n.config';
import { Link } from '@core';

type Props = {
    children: React.ReactNode;
    params: {
        lang: Locale;
    };
};

const Layout = ({ children, params }: Props) => {
    const { lang } = params;

    return (
        <>
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

            {children}
        </>
    );
};

export default Layout;
