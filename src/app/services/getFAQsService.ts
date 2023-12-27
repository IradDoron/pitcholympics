import FAQ from '@/models/faq';
import { FAQ as FAQType } from '@/types';
import { connectToDB } from '@/utils/database';

export async function getFAQsService() {
    connectToDB();
    try {
        const faqs = (await FAQ.find()) as FAQType[];
        return faqs;
    } catch (error) {
        console.log(error);
    }
}
