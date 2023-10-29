import Link from 'next/link';

type Props = {
	levelNumber: number;
	url: string;
	status: 'passed' | 'failed' | 'locked';
};

const LevelLink = ({ levelNumber, url, status }: Props) => {
	return (
		<Link
			href={url}
			className='flex justify-center items-center rounded-[50%] w-[52px] h-[52px] bg-light-primary-main dark:bg-dark-primary-main text-light-primary-contrastText dark:text-dark-primary-contrastText text-xl font-bold'
		>
			{levelNumber}
		</Link>
	);
};

export default LevelLink;
