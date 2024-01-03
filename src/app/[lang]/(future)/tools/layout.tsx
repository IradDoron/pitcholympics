import { Locale } from '@/i18n.config';
import { Link } from '@core';

type Props = {
    children: React.ReactNode;
    params: { lang: Locale };
};

const Layout = ({ children, params }: Props) => {
    const { lang } = params;

    const toolsList = ['Metronome'];

    return (
        <div>
            <h1 className='text-2xl font-bold'>Choose a tool</h1>
            <ul className='flex gap-4 m-4'>
                {toolsList.map(tool =>
                    <li key={tool}>
                        <Link url={`/${lang}/tools/${tool.toLowerCase()}`} label={tool} />
                    </li>
                )}
            </ul>
            {children}
        </div>
    );
};

export default Layout;
