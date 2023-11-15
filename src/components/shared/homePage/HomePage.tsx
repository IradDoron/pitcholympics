'use client';
import { Locale } from '@/i18n.config';
import { useRouter } from 'next/navigation';

type Props = {
    title: string;
    lang: Locale;
};

const HomePage = ({ lang }: Props) => {
    const router = useRouter();
    return (
        <>
            <div>כאן יופיע הבחירה למעבר למשחקים</div>
            <button
                type='button'
                onClick={() => router.push(`/${lang}/pitch-catch`)}>
                Pitch Catch
            </button>
            <button
                type='button'
                onClick={() => router.push(`/${lang}/memo-the-melo`)}>
                Memo The Melo
            </button>
        </>
    );
};

export default HomePage;
