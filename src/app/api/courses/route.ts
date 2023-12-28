import { User } from '@models';
import { connectToDB } from '@utils';
import { getServerSession } from 'next-auth';

export async function GET() {
    const session = await getServerSession();
    if (!session) return Response.json({ error: 'Not authenticated' });
    await connectToDB();
    const user = await User.findOne({ email: session?.user?.email });
    return Response.json({ user });
}
