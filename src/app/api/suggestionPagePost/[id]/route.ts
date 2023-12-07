import { connectToDB } from '@/utils/database';

import SuggestionPage from '@/models/suggestionsPagePost';
import { NextRequest, NextResponse } from 'next/server';
import { getSession } from 'next-auth/react';

export async function POST(request: NextRequest, { params }: any) {
    const { id } = params;
    const { title, description, category, authorId } = await request.json();
    const session = await getSession();
    await connectToDB();
    console.log(session);
    try {
        const suggestionPagePost = await SuggestionPage.findOne({ _id: id });

        if (!suggestionPagePost) {
            return NextResponse.json(
                { message: 'Suggestion Post not found' },
                { status: 404 },
            );
        }

        await SuggestionPage.findByIdAndUpdate(id, {
            title,
            description,
            category,
            authorId,
        });

        return NextResponse.json(
            { message: 'Suggestion Post updated successfully' },
            { status: 200 },
        );
    } catch (error) {
        return NextResponse.json(
            { message: 'Invalid input data' },
            { status: 400 },
        );
    }
}
