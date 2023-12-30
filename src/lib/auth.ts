import { User } from '@models';
import { connectToDB } from '@utils';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const {
    handlers: { GET, POST },
    auth,
} = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
        }),
    ],
    callbacks: {
        async session({ session }) {
            // store the user id from MongoDB to session
            const sessionUser = await User.findOne({
                email: session?.user?.email,
            });
            // TODO: fix the session error
            //@ts-ignore
            session.user.id = sessionUser._id.toString();

            return session;
        },
        async signIn({ account, profile, user, credentials }) {
            try {
                await connectToDB();

                // check if user already exists
                const userExists = await User.findOne({
                    email: profile?.email,
                });

                // if not, create a new document and save user in MongoDB
                if (!userExists) {
                    await User.create({
                        email: profile?.email,
                        username: profile?.name?.replace(' ', '').toLowerCase(),
                    });
                }

                return true;
            } catch (error) {
                console.log(
                    `Error checking if user exists: ${
                        error instanceof Error ? error.message : error
                    }`,
                );
                return false;
            }
        },
    },
});
