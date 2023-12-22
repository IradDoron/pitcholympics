import FAQ from '@/models/faq';

type RouteParams = {
    params: {
        faqId: string;
    };
};

export const GET = async ({ params }: RouteParams) => {
    const { faqId } = params;

    const faq = await FAQ.findById(faqId);

    return faq;
};
