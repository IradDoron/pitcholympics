import { getUserService } from '@/app/services/getUserService';
import { updateUserProfileService } from '@/app/services/updateUserProfileService';
import { connectToDB } from '@/utils/database';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest, { params }: any) {
    const user = await getUserService(params.userId);
    return NextResponse.json({ user }, { status: 200 });
}

export async function PUT(request: NextRequest, { params }: any) {
    connectToDB();
    const { userId } = params;
    const { newGender, newLocale } = await request.json();
    updateUserProfileService(userId, newLocale, newGender);

    return NextResponse.json(
        { message: 'gender and locale updated' },
        { status: 200 },
    );
}
