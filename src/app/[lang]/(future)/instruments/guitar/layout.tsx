import { Locale } from '@/i18n.config';
import { Link } from '@core';

type Props = {
    children: React.ReactNode;
    params: {
        lang: Locale;
    };
};

const NavLink = ({ label, lang }: { label: string; lang: Locale }) => {
    const getTextCaseFromKebabCase = (kebabCase: string) => {
        return kebabCase
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };
    return (
        <li>
            <Link
                url={`/${lang}/instruments/guitar/${label}`}
                label={getTextCaseFromKebabCase(label)}
            />
        </li>
    );
};

const Layout = ({ children, params }: Props) => {
    const { lang } = params;

    const pages = [
        'chords',
        'songs',
        'solos',
        'technique',
        'scales',
        'classical-guitar',
        'jazz-guitar',
        'metal-guitar',
        'rock-guitar',
        'finger-style',
        'guitar-history',
        'gear',
        'courses',
    ];
    return (
        <div>
            <h1 className='text-2xl font-bold'>Learn to play the guitar</h1>
            <ul className='flex gap-4 m-4 flex-wrap'>
                {pages.map(page => {
                    return <NavLink key={page} label={page} lang={lang} />;
                })}
            </ul>
            {children}
        </div>
    );
};

export default Layout;
