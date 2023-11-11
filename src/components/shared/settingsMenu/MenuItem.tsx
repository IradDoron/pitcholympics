import React from 'react';

type Props = {
	label: string;
	icon: React.ReactNode;
	onClick: () => void;
};

const MenuItem = ({ label, icon, onClick }: Props) => {
	return (
		<button
			onClick={onClick}
			className='p-4 flex flex-row gap-2 flex-start w-full items-center hover:bg-blue-100'
		>
			{icon}
			<span>{label}</span>
		</button>
	);
};

export default MenuItem;
