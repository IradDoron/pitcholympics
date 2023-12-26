import { connectToDB } from '@/utils/database';
import User from '@/models/user';

export async function getUserService(userId: string) {
    await connectToDB();
    try {
        const user = await User.findById(userId);

        return user;
    } catch (error) {
        console.log(error);
    }
}
