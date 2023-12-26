import { connectToDB } from '@/utils/database';
import User from '@/models/user';
import { NextResponse, NextRequest } from 'next/server';
import { convertKebabCaseToCamelCase, mapToObject } from '@/utils';
import { GameNames, GameNamesToSlug, LevelStatus } from '@/types';

type RouteParams = {
    params:
    {
        id: string,
        game: GameNamesToSlug,
    }
}

/**
 *  update and add the user stage level and status with the id of the user
 * @param params: any command
 */
export async function PUT(request: NextRequest, { params }: RouteParams) {
    const { id, game } = params;
    const { status, stage, level, isLastLevel } = await request.json();
    const gameName = convertKebabCaseToCamelCase(game);

    await connectToDB();

    try {
        const user = await User.findOne({ _id: id });
        const gameDataObject = mapToObject(user.gameProgress[gameName]);
        const levelKey = `${stage}_${level}`;

        // if level already passed return
        if (gameDataObject[levelKey] as LevelStatus === 'passed') {
            return NextResponse.json(
                { message: 'Level already passed' },
                { status: 200 },
            );
        }

        // update the level status
        const newKey = `gameProgress.${gameName}.${levelKey}`;
        await User.findByIdAndUpdate(id, {
            $set: { [newKey]: status },
        });

        // update the next level status to pending
        const nextLevelKey = isLastLevel ? `${stage + 1}_${level}` : `${stage}_${level + 1}`;
        const nextKey = `gameProgress.${gameName}.${nextLevelKey}`;
        await User.findByIdAndUpdate(id, {
            $set: { [nextKey]: 'pending' }
        });

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
export async function GET(request: NextRequest, { params }: RouteParams) {
    const { id, game } = params;

    const gameName = convertKebabCaseToCamelCase(game) as GameNames;

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
