import { connectToDB } from '@/utils/database';
import User from '@/models/user';

export async function getUsesrService() {
    connectToDB();
    try {
        const users = await User.find();

        return users;
    } catch (error) {
        console.log(error);
    }
}
