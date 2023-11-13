import { Dispatch, SetStateAction } from 'react';

type Props = {
	setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const TransparentBg = ({ setIsOpen }: Props) => {
	return (
		<div
			className='fixed w-screen h-screen top-0 end-0'
			onClick={() => setIsOpen(false)}
		></div>
	);
};

export default TransparentBg;
