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
            await connectToDB();
            try {
                // check if user already exists
                const userExists = await User.findOne({
                    email: profile?.email,
                });

                // if yes, return true
                if (userExists) {
                    return true;
                }

                // if not, create a new user
                const newUser = new User({
                    email: profile?.email,
                    username: profile?.email,
                }) as typeof User;

                // save the new user
                await User.create(newUser);

                // return true
                return true;
            } catch (error) {
                // eslint-disable-next-line no-console
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
