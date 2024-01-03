import { MuiThemeProvider } from '@/context/MuiThemeProvider';
import NextAuthProvider from '@/context/SessionProvider';
import ThemeProvider from '@/context/ThemeProvider';
import { Locale, i18n } from '@/i18n.config';
import { lightTheme } from '@/style/themes';
import { Button } from '@core';
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

export default async function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { lang: Locale };
}) {
    return (
        <html lang={params.lang} dir={getHtmlDirection(params.lang)}>
            <ThemeProvider>
                <MuiThemeProvider theme={lightTheme}>
                    <body
                        className={` bg-light-background-default dark:bg-dark-background-default`}>
                        <NextAuthProvider>
                            <Navbar params={params} />

                            {children}
                        </NextAuthProvider>
                    </body>
                </MuiThemeProvider>
            </ThemeProvider>
        </html>
    );
}
