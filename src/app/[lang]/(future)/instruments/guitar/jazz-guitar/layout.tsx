import { Locale } from '@/i18n.config';
import { Link } from '@core';

type Props = {
    children: React.ReactNode;
    params: {
        lang: Locale;
    };
};

const Layout = ({ children, params }: Props) => {
    const { lang } = params;
    return (
        <div>
            <h1 className='text-2xl font-bold'>Learn to play jazz guitar</h1>
            <ul className='flex gap-4 m-4'>
                <li>
                    <Link
                        url={`/${lang}/instruments/guitar/jazz-guitar/chords`}
                        label='Jazz Guitar Chords'
                    />
                </li>
                <li>
                    <Link
                        url={`/${lang}/instruments/guitar/jazz-guitar/standards`}
                        label='Jazz Guitar Standards'
                    />
                </li>
            </ul>
            {children}
        </div>
    );
};

export default Layout;
