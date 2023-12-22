import FAQ from '@/models/faq';
import { NextApiRequest } from 'next';

export const GET = async (req: NextApiRequest) => {
    const { faqId } = req.query;

    const faq = await FAQ.findById(faqId);

    return faq;
};
