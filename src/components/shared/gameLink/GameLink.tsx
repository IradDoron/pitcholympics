import Link from 'next/link';

type ColorType = 'peach' | 'lambada';

type Props = {
	href: string;
	label: string;
	colorType: ColorType;
};

const GameLink = ({ href, label, colorType }: Props) => {
	return (
		<Link
			href={href}
			style={{
				backgroundImage:
					'linear-gradient(208deg, #FFAED3 -13.56%, #FF5E98 91.39%)',
				width: '218px',
				height: '218px',
				borderRadius: '50%',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
			className={`text-xl font-bold rounded-[50%] text-light-background-default dark:text-dark-background-default `}
		>
			{label}
		</Link>
	);
};

export default GameLink;
