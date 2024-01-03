import { NextRequest } from 'next/server';

export async function POST(request: NextRequest, { params }: any) {
    try {
        const response = await fetch(
            `${process.env.BASE_URL}/api/suggestions`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(request.body),
            },
        );
        const data = await response.json();
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
    }
}
