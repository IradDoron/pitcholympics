import React from 'react';

type Props = {
	children: React.ReactNode;
};

const LevelsLinksContainer = ({ children }: Props) => {
	return (
		<div className='flex justify-center flex-wrap flex-row gap-10 items-center p-4'>
			{children}
		</div>
	);
};

export default LevelsLinksContainer;
