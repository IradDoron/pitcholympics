import { connectToDB } from '@/utils/database'
import User from "@/models/user"
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { Locale } from '@/i18n.config';

/**
 *  update the user gender and locale with the id of the user
 * @param params: any command
*/
export async function PUT(request: NextRequest, { params }: any) {// TODO: fix any
    const { id } = params;
    const { newGender: gender, newLocale: locale } = await request.json()
    await connectToDB()
    await User.findByIdAndUpdate(id, { gender, locale })
    return NextResponse.json({ message: "gender and locale updated" }, { status: 200 })
}

/**
 *  get the user by id
 * @param params: any 
*/
export async function GET(request: NextRequest, { params }: any) {// TODO: fix any
    const { id } = params;
    await connectToDB();
    const user = await User.findOne({ _id: id })
    return NextResponse.json({ user }, { status: 200 })

}