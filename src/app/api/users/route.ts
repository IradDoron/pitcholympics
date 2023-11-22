import { connectToDB } from '@/utils/database';
import { getServerSession } from 'next-auth'
import User from '@/models/user';

export async function GET() {
  const session = await getServerSession();
  if (!session)
    return Response.json({ error: 'Not authenticated' });
  await connectToDB();
  const user = await User.findOne({ email: session?.user?.email });
  return Response.json({ user })
}