import NextAuth, { NextAuthOptions } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: NextAuthOptions = {
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
		async session({ session, user, token }) {
			console.log('session', session, user, token);
			return session;
		},
		async redirect({ url, baseUrl }) {
			console.log('redirect', url, baseUrl);
			return baseUrl;
		},
		async jwt({ token, user, account, profile, isNewUser }) {
			return token;
		},
		async signIn({ user, account, profile, email, credentials }) {
			return true;
		},
	},
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
