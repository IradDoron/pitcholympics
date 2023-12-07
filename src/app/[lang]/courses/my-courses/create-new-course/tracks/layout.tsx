'use client';

import { Link } from '@/components/core';
import { Locale } from '@/i18n.config';
import { usePathname } from 'next/navigation';

type Props = {
    children: React.ReactNode;
    params: {
        lang: Locale;
    };
};

const Layout = ({ children, params }: Props) => {
    const { lang } = params;
    const pathname = usePathname();
    const pathSegments = pathname.split('/');
    return (
        <div className='mt-16'>
            <section className='flex flex-row justify-center gap-4'>
                <Link
                    url={`/${lang}/courses/my-courses/create-new-course/tracks/all-tracks`}
                    label='All Tracks'
                    color={
                        pathSegments[pathSegments.length - 1] ===
                            'all-tracks' &&
                        pathSegments[pathSegments.length - 2] === 'tracks'
                            ? 'secondary'
                            : 'primary'
                    }
                />
                <Link
                    url={`/${lang}/courses/my-courses/create-new-course/tracks/edit`}
                    label='Edit'
                    color={
                        pathSegments[pathSegments.length - 1] === 'edit' &&
                        pathSegments[pathSegments.length - 2] === 'tracks'
                            ? 'secondary'
                            : 'primary'
                    }
                />
                <Link
                    url={`/${lang}/courses/my-courses/create-new-course/tracks/preview`}
                    label='Preview'
                    color={
                        pathSegments[pathSegments.length - 1] === 'preview' &&
                        pathSegments[pathSegments.length - 2] === 'tracks'
                            ? 'secondary'
                            : 'primary'
                    }
                />
            </section>
            {children}
        </div>
    );
};

export default Layout;
