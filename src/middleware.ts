import { i18n } from '@/i18n.config';
import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { authMiddleware, redirectToSignIn } from '@clerk/nextjs';

function getLocale(request: NextRequest): string | undefined {
	const negotiatorHeaders: Record<string, string> = {};
	request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

	// @ts-ignore locales are readonly
	const locales: string[] = i18n.locales;
	const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

	const locale = matchLocale(languages, locales, i18n.defaultLocale);
	return locale;
}

export const middleware = (request: NextRequest) => {
	console.log('in middleware');
	const pathname = request.nextUrl.pathname;
	const pathnameIsMissingLocale = i18n.locales.every(
		(locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
	);

	// Redirect if there is no locale
	if (pathnameIsMissingLocale) {
		const locale = getLocale(request);

		return NextResponse.redirect(
			new URL(
				`/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
				request.url
			)
		);
	}
};

// export default authMiddleware({
// 	publicRoutes: [
// 		'/en/sign-in',
// 		'/he/sign-in',
// 		'/en',
// 		'/en/about',
// 		'/he',
// 		'/he/about',
// 		'/he/memo-the-melo/1/1',
// 		'/en/memo-the-melo/1/1'
// 	],
// 	ignoredRoutes: ['/((?!api|trpc))(_next.*|.+.[w]+$)'],
// 	beforeAuth(req) {
// 		return middleware(req);
// 	},
// 	afterAuth() { }
// });

export const config = {
	matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
