import { connectToDB } from '@/utils/database';
import User from '@/models/user';
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { isLevelExisting } from '@/utils';
import { convertKebabCaseToCamelCase } from '@/utils';

/**
 *  update and add the user stage level and status with the id of the user
 * @param params: any command
 */
export async function PUT(request: NextRequest, { params }: any) {
    const { id, game } = params;
    const { status, stage, level } = await request.json();
    const gameName = convertKebabCaseToCamelCase(game);

    await connectToDB();

    try {
        const user = await User.findOne({ _id: id });
        const isLevelExist = isLevelExisting(
            stage,
            level,
            user.gameProgress[gameName],
        );
        const levelKey = `${stage}_${level}`;

        if (!isLevelExist) {
            // If the entry does not exist, create a new one
            const newKey = `gameProgress.${gameName}.${levelKey}`;
            await User.findByIdAndUpdate(id, {
                $set: { [newKey]: status },
            });
        }

        const levelCurrentStatus = user.gameProgress[gameName][levelKey];

        if (isLevelExist && levelCurrentStatus === 'passed') {
            return;
        } else {
            const newKey = `gameProgress.${gameName}.${levelKey}`;

            await User.findByIdAndUpdate(id, {
                $set: { [newKey]: status },
            });
        }

        return NextResponse.json(
            { message: 'User updated successfully' },
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
    const { id, game } = params;

    const gameName = convertKebabCaseToCamelCase(game);

    await connectToDB();
    const user = await User.findOne({ _id: id });

    if (user) {
        const gameData = user.gameProgress[gameName];

        return NextResponse.json({ gameData }, { status: 200 });
    } else {
        return NextResponse.json(
            { message: 'User not found' },
            { status: 404 },
        );
    }
}
