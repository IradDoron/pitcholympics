import { connectToDB } from '@/utils/database';
import User from '@/models/user';
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { isLevelExisting } from '@/utils';

/**
 *  update and add the user stage level and status with the id of the user
 * @param params: any command
 */
export async function PUT(request: NextRequest, { params }: any) {
    const { id } = params;
    const { status, stage, level } = await request.json();

    await connectToDB();

    try {
        const user = await User.findOne({ _id: id });
        const isLevelExist = isLevelExisting(
            stage,
            level,
            user.gameProgress.memoTheMelo,
        );
        const levelKey = `${stage}_${level}`;

        if (!isLevelExist) {
            // If the entry does not exist, create a new one
            const newKey = `gameProgress.memoTheMelo.${levelKey}`;
            await User.findByIdAndUpdate(id, {
                $set: { [newKey]: status },
            });
        }

        const levelCurrentStatus = user.gameProgress.memoTheMelo[levelKey];

        if (isLevelExist && levelCurrentStatus === 'passed') {
            return;
        } else {
            const newKey = `gameProgress.memoTheMelo.${levelKey}`;

            await User.findByIdAndUpdate(id, {
                $set: { [newKey]: status },
            });
        }

        return NextResponse.json(
            { message: 'memoTheMelo updated' },
            { status: 200 },
        );
    } catch (error) {
        return NextResponse.json(
            { message: 'Invalid input data' },
            { status: 400 },
        );
    }
}

/**
 *  get the user status,level,stage by id
 * @param params: any
 */
export async function GET(request: NextRequest, { params }: any) {
    const { id } = params;

    await connectToDB();
    const user = await User.findOne({ _id: id });

    if (user) {
        const memoTheMeloObjects = user.gameProgress.memoTheMelo;

        return NextResponse.json({ memoTheMeloObjects }, { status: 200 });
    } else {
        return NextResponse.json(
            { message: 'User not found' },
            { status: 404 },
        );
    }
}
