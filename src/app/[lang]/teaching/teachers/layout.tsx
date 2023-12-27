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
            <h1>Layout of teachers page</h1>
            <Link
                url={`/${lang}/teaching/teachers/analytics`}
                label='Analytics'
            />
            <Link
                url={`/${lang}/teaching/teachers/lessons-tracking`}
                label='Lessons Tracking'
            />
            <Link
                url={`/${lang}/teaching/teachers/materials`}
                label='Materials'
            />
            <Link url={`/${lang}/teaching/teachers/schools`} label='Schools' />
            {children}
        </div>
    );
};

export default Layout;
