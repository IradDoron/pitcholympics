import NextAuthProvider from '@/context/SessionProvider';
import ThemeProvider from '@/context/ThemeProvider';
import { Locale, i18n } from '@/i18n.config';
import '@/styles/globals.css';
import { getHtmlDirection } from '@/utils/getHtmlDirection';
import { Navbar } from '@shared';
import type { Metadata } from 'next';
import Providers from './_components/Providers';
import GlobalStyles from '@/styles/globalStyles';
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
                <body
                    className={` bg-light-background-default dark:bg-dark-background-default`}>
                    <NextAuthProvider>
                        <Navbar params={params} />
                        <Providers>
                            <GlobalStyles />
                            {children}
                        </Providers>
                    </NextAuthProvider>
                </body>
            </ThemeProvider>
        </html>
    );
}
