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
            <h1 className='text-2xl font-bold'>Learn to play the piano</h1>
            <ul className='flex gap-4 m-4 flex-wrap'>
                <li>
                    <Link
                        url={`/${lang}/instruments/piano/accompaniment-patterns`}
                        label='Accompaniment patterns'
                    />
                </li>
                <li>
                    <Link
                        url={`/${lang}/instruments/piano/solos`}
                        label='Solos'
                    />
                </li>
                <li>
                    <Link
                        url={`/${lang}/instruments/piano/songs`}
                        label='Songs'
                    />
                </li>
                <li>
                    <Link
                        url={`/${lang}/instruments/piano/technique`}
                        label='Technique'
                    />
                </li>
            </ul>
            {children}
        </div>
    );
};

export default Layout;
