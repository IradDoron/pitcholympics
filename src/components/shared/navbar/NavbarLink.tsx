'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
	url: string;
	label: string;
};

const CurrentLink = ({ url, label }: Props) => {
	return (
		<Link
			className='text-light-primary-main dark:text-dark-primary-main font-bold text-xl '
			href={url}
		>
			{label}
			<div className='h-1 bg-light-primary-main dark:bg-dark-primary-main'></div>
		</Link>
	);
};

const NotCurrentLink = ({ url, label }: Props) => {
	return (
		<Link
			className='text-common-greyScale-600 dark:text-common-greyScale-100 font-bold text-xl '
			href={url}
		>
			{label}
			<div className='h-1 bg-common-greyScale-600 dark:bg-common-greyScale-100'></div>
		</Link>
	);
};

const NavbarLink = ({ url, label }: Props) => {
	const isCurrent = url === usePathname();
	return (
		<>
			{isCurrent ? (
				<CurrentLink url={url} label={label} />
			) : (
				<NotCurrentLink url={url} label={label} />
			)}
		</>
	);
};

export default NavbarLink;
