import Link from 'next/link';
import StatusIcon from './StatusIcon';

type Props = {
    levelNumber: number;
    url: string;
    status: 'passed' | 'failed' | 'locked' | 'pending';
};

const LevelLink = ({ levelNumber, url, status = 'locked' }: Props) => {
    return (
        <>
            {status === 'locked' ? (
                <Link
                    href={url}
                    className='relative flex justify-center items-center rounded-[50%] w-[52px] h-[52px] bg-grey-900 dark:bg-grey-500 text-grey-100 dark:text-grey-B00 text-xl font-bold pointer-events-none'>
                    {levelNumber}
                </Link>
            ) : (
                <Link
                    href={url}
                    className='relative flex justify-center items-center rounded-[50%] w-[52px] h-[52px] bg-light-primary-main dark:bg-dark-primary-main text-light-primary-contrastText dark:text-dark-primary-contrastText text-xl'>
                    <StatusIcon status={status} />
                    {levelNumber}
                </Link>
            )}
        </>
    );
};

export default LevelLink;
