import { Locale } from '@/i18n.config';
import { Link } from '@core';
import { PageFiller } from '@shared';

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
            <PageFiller />
            <h1>Explore</h1>
            <ul>
                <li>
                    <Link
                        url={`/${lang}/music-history/explore/search-composer`}
                        label='Search Composer'
                    />
                    <Link
                        url={`/${lang}/music-history/explore/search-country`}
                        label='Search Country'
                    />
                    <Link
                        url={`/${lang}/music-history/explore/search-era`}
                        label='Search Era'
                    />
                    <Link
                        url={`/${lang}/music-history/explore/search-piece`}
                        label='Search Piece'
                    />
                    <Link
                        url={`/${lang}/music-history/explore/search-story`}
                        label='Search Story'
                    />
                </li>
            </ul>
            {children}
        </div>
    );
};

export default Layout;
