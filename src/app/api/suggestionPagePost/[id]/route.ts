import { connectToDB } from '@/utils/database';
import SuggestionPage from '@/models/suggestionsPagePost';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest, { params }: any) {
    const { id } = params;
    const { title, description, category, authorId } = await request.json();
    const newSuggestionPagePost = new SuggestionPage({
        title,
        description,
        category,
        authorId: id,
    });
    console.log(newSuggestionPagePost);
    await connectToDB();
    try {
        await SuggestionPage.create(newSuggestionPagePost);
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
