import { Locale } from '@/i18n.config';
import { Link, Text } from '@core';

type Props = {
    params: {
        lang: Locale;
    };
};

const Page = ({ params }: Props) => {
    const { lang } = params;
    return (
        <>
            <Text>Music History</Text>
            <ul className='flex gap-4 m-4'>
                <li>
                    <Link
                        url={`/${lang}/music-history/explore/search/composer`}
                        label='Explore'
                    />
                </li>
                <li>
                    <Link
                        url={`/${lang}/music-history/adventures`}
                        label='Adventures'
                    />
                </li>
            </ul>
        </>
    );
};

export default Page;
