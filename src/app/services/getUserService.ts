import { connectToDB } from '@/utils/database';
import User from '@/models/user';

export async function getUserService(userId: string) {
    await connectToDB();
    try {
        const user = await User.findById('65638253d365cb85e4984374');

        return user;
    } catch (error) {
        console.log(error);
    }
}
