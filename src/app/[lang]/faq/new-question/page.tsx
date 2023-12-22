import { Link } from '@/components/core';
import { Locale } from '@/i18n.config';

type Props = {
    params: {
        lang: Locale;
    };
};
const Page = async ({ params: { lang } }: Props) => {
    return (
        <div>
            <h1>New question</h1>
            <Link url={`/${lang}/faq/new-question/preview`} label='Preview' />
            <Link url={`/${lang}/faq`} label='Back' />
        </div>
    );
};

export default Page;
