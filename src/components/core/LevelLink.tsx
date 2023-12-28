import Link from 'next/link';

type Props = {
    url: string;
    state: 'passed' | 'current' | 'failed' | 'locked';
    level: number;
};

function LevelLink({ url, state, level }: Props) {
    return (
        (state === 'locked' && (
            <div className='w-5 h-5 rounded-full bg-gray-500 text-white text-center flex justify-center items-center'>
                {level}
            </div>
        )) ||
        (state === 'failed' && (
            <Link
                className='w-5 h-5 rounded-full bg-red-500 text-white text-center flex justify-center items-center'
                href={url}>
                {level}
            </Link>
        )) ||
        (state === 'current' && (
            <Link
                className='w-5 h-5 rounded-full bg-yellow-500 text-white text-center flex justify-center items-center'
                href={url}>
                {level}
            </Link>
        )) ||
        (state === 'passed' && (
            <Link
                className='w-5 h-5 rounded-full bg-green-500 text-white text-center flex justify-center items-center'
                href={url}>
                {level}
            </Link>
        ))
    );
}

export default LevelLink;
