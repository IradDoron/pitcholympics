import { auth } from '@/lib/auth';
import { User } from '@models';
import { connectToDB } from '@utils';

export async function GET() {
    const session = await auth();
    if (!session) return Response.json({ error: 'Not authenticated' });
    await connectToDB();
    const user = await User.findOne({ email: session?.user?.email });
    return Response.json({ user });
}
