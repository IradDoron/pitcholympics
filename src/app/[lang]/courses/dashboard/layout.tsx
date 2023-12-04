import Link from '@core/link';
import React from 'react';

type Props = {
    children: React.ReactNode;
    params: {
        lang: string;
    };
};

const Layout = ({ children, params }: Props) => {
    const { lang } = params;
    return (
        <div>
            <h1>Layout</h1>
            <Link label='Courses' url={`/${lang}/courses`} />
            <section>{children}</section>
        </div>
    );
};

export default Layout;
