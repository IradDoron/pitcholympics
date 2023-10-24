'use client'
import { useRouter } from 'next/navigation'

type Props = {
    title: string;
};

const HomePage = ({ title }: Props) => {
    const router = useRouter();
    return (
        <>
            <div>כאן יופיע  הבחירה למעבר למשחקים</div>
            <button type="button" onClick={() => router.push('/pitch-catch')}>Pitch Catch</button>
            <button type="button" onClick={() => router.push('/memo-the-melo')}>Memo The Melo</button>
        </>
    )
}

export default HomePage