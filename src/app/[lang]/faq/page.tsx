import { Locale } from '@/i18n.config';
import { faqMockData } from '@/mockData/faqMockData';
import { Link } from '@core';
import { FAQBlock } from './_components';

type Props = {
    params: {
        lang: Locale;
    };
};

const Page = ({ params: { lang } }: Props) => {
    return (
        <div>
            <h1>FAQ</h1>
            <Link url='faq/new-question' label='New Question' />

            <div>
                {faqMockData.map((faq, index) => (
                    <FAQBlock key={index} faq={faq} lang={lang} />
                ))}
            </div>
        </div>
    );
};

export default Page;
