import { FAQ } from '@models';
import { NextRequest } from 'next/server';

type RouteParams = {
    params: {
        faqId: string;
    };
};

export const GET = async (request: NextRequest, { params }: RouteParams) => {
    const { faqId } = params;

    const faq = await FAQ.findById(faqId);

    return faq;
};
