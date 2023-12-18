import { Locale } from '@/i18n.config';
import { Link } from '@core';

type Props = {
    params: {
        lang: Locale;
    };
};

const Page = ({ params }: Props) => {
    const { lang } = params;
    return (
        <>
            <h1>Musical Pattern</h1>
            <ul className='flex gap-4 m-4'>
                <li>
                    <Link
                        url={`/${lang}/musical-patterns/piano-patterns/`}
                        label='Piano Pattern'
                    />
                </li>
                <li>
                    <Link
                        url={`/${lang}/musical-patterns/guitar-patterns/`}
                        label='Guitar Pattern'
                    />
                </li>
            </ul>
        </>
    );
};

export default Page;
