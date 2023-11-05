import NextAuth, { NextAuthOptions } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: NextAuthOptions = {
	secret: process.env.NEXTAUTH_SECRET,

	providers: [
		GitHubProvider({
			clientId: process.env.GITHUB_ID ?? '',
			clientSecret: process.env.GITHUB_SECRET ?? '',
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID ?? '',
			clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
		}),
	],
	callbacks: {
		async session(params) {
			return params.session;
		},
	},
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
