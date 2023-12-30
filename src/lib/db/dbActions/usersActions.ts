import { User } from '@models';
import { connectToDB } from '@utils';

export async function getUsesr() {
    connectToDB();
    try {
        const users = await User.find();

        return users;
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
    }
}

export async function getUser(userId: string) {
    await connectToDB();
    try {
        const user = await User.findById(userId);

        return user;
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
    }
}

export async function updateUserProfile(
    userId: string,
    locale: string,
    gender: string,
) {
    connectToDB();
    try {
        await User.findByIdAndUpdate(userId, { gender, locale });
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
    }
}
