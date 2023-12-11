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
        <div>
            <h1>Explore</h1>
            <ul className='flex gap-4 m-4'>
                <li>
                    <Link
                        url={`/${lang}/music-history/explore/search/composer`}
                        label='Search Composer'
                    />
                </li>
                <li>
                    <Link
                        url={`/${lang}/music-history/explore/search/country`}
                        label='Search Country'
                    />
                </li>
                <li>
                    <Link
                        url={`/${lang}/music-history/explore/search/era`}
                        label='Search Era'
                    />
                </li>
                <li>
                    <Link
                        url={`/${lang}/music-history/explore/search/piece`}
                        label='Search Piece'
                    />
                </li>
                <li>
                    <Link
                        url={`/${lang}/music-history/explore/search/story`}
                        label='Search Story'
                    />
                </li>
            </ul>
            {children}
        </div>
    );
};

export default Layout;
