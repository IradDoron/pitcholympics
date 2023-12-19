import { Locale } from '@/i18n.config';
import { Link } from '@core';

type Props = {
    params: {
        lang: Locale;
    };
};

const Page = ({ params }: Props) => {
    const { lang } = params;
    const linksData = [
        {
            label: 'HTML5',
            url: 'html5',
        },
        {
            label: 'CSS3',
            url: 'css3',
        },
        {
            label: 'JavaScript',
            url: 'javascript',
        },
        {
            label: 'TypeScript',
            url: 'typescript',
        },
        {
            label: 'React.js',
            url: 'react',
        },
        {
            label: 'Next.js',
            url: 'nextjs',
        },
        {
            label: 'MongoDB',
            url: 'mongodb',
        },
        {
            label: 'Tailwind CSS',
            url: 'tailwindcss',
        },
        {
            label: 'Styled Components',
            url: 'styled-components',
        },
        {
            label: 'Cypress',
            url: 'cypress',
        },
        {
            label: 'PNPM',
            url: 'pnpm',
        },
        {
            label: 'Vercel',
            url: 'vercel',
        },
        {
            label: 'GitHub',
            url: 'github',
        },
        {
            label: 'Git',
            url: 'git',
        },
        {
            label: 'ESLint',
            url: 'eslint',
        },
        {
            label: 'Figma',
            url: 'figma',
        },
        {
            label: 'Prettier',
            url: 'prettier',
        },
    ];
    return (
        <div>
            <h1>Tech</h1>
            <ul className='flex gap-4 flex-wrap'>
                {linksData.map(link => (
                    <li key={link.url}>
                        <Link
                            url={`/${lang}/dev-info/tech/${link.url}`}
                            label={link.label}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Page;
