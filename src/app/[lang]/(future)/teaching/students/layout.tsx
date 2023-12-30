import { Locale } from '@/i18n.config';
import { Link } from '@core';

type Props = {
    children: React.ReactNode;
    params: {
        lang: Locale;
    };
};

const Layout = async ({ children, params }: Props) => {
    const { lang } = params;
    return (
        <div>
            <h1>Layout</h1>
            <Link
                url={`/${lang}/teaching/students/homeworks`}
                label='Homeworks'
            />
            <Link
                url={`/${lang}/teaching/students/lessons-tracking`}
                label='Lessons Tracking'
            />
            <Link
                url={`/${lang}/teaching/students/materials`}
                label='Materials'
            />
            <Link url={`/${lang}/teaching/students/pieces`} label='Pieces' />
            {children}
        </div>
    );
};

export default Layout;
