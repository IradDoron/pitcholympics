import NextAuthProvider from '@/context/SessionProvider';
// import ThemeProvider from '@/context/ThemeProvider';
import { ThemeProvider } from '@emotion/react';

import { Locale, i18n } from '@/i18n.config';
import { Navbar } from '@shared';
import { getHtmlDirection } from '@utils';
import type { Metadata } from 'next';
import './globals.css';
// const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Pitch Olympics',
    description: 'Website for improve pitch recognition and musical skills',
};

export async function generateStaticParams() {
    return i18n.locales.map(locale => ({ lang: locale }));
}

const theme = {
    palette: {
        primary: 'green',
        text: '#fff',
    },
};

export default async function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { lang: Locale };
}) {
    return (
        <html lang={params.lang} dir={getHtmlDirection(params.lang)}>
            <ThemeProvider theme={theme}>
                <body
                    className={` bg-light-background-default dark:bg-dark-background-default`}>
                    <NextAuthProvider>
                        <Navbar params={params} />
                        {children}
                    </NextAuthProvider>
                </body>
            </ThemeProvider>
        </html>
    );
}
