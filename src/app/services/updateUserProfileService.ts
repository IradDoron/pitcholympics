import { connectToDB } from '@/utils/database';
import User from '@/models/user';

export async function updateUserProfileService(
    userId: string,
    locale: string,
    gender: string,
) {
    connectToDB();
    try {
        await User.findByIdAndUpdate(userId, { gender, locale });
    } catch (error) {
        console.log(error);
    }
}
