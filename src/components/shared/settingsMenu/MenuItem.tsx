import React from 'react';

type Props = {
	label: string;
	icon: React.ReactNode;
	onClick: () => void;
};

const MenuItem = ({ label, icon, onClick }: Props) => {
	return (
		<div>
			<button onClick={onClick} className='flex flex-row gap-2'>
				{icon}
				<span>{label}</span>
			</button>
		</div>
	);
};

export default MenuItem;
