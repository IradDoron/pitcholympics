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
            <nav>
                <Link
                    url={`/${lang}/dev-info/architecture`}
                    label='Architecture'
                />
                <Link url={`/${lang}/dev-info/tech`} label='Tech' />
            </nav>

            <main>{children}</main>
        </>
    );
};

export default Layout;
