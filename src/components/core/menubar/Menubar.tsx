import React, { useState } from 'react';

type Props = {
	content: React.ReactNode;
	trigger: React.ReactNode;
};

const Menubar = ({ content, trigger }: Props) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleTriggerClick = () => {
		setIsOpen(!isOpen);
	};

	const handleContentClick = () => {
		setIsOpen(false);
	};

	const handleFocus = () => {
		console.log('focus');
	};

	return (
		<button className='relative flex justify-center items-center'>
			<div
				className='cursor-pointer p-2 w-fit h-12'
				onClick={handleTriggerClick}
				onFocus={handleFocus}
			>
				{trigger}
			</div>
			<div
				className={`absolute ${isOpen ? 'block' : 'hidden'}`}
				onClick={handleContentClick}
			>
				{content}
			</div>
		</button>
	);
};

export default Menubar;
