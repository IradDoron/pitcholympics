import { connectToDB } from '../../../utils/database'
import User from "../../../models/user"
import { NextResponse } from 'next/server';

//Get all users
export async function GET() {
    await connectToDB()
    const user = await User.find();
    return NextResponse.json({ user });
}