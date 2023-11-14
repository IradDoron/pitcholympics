import { Dispatch, SetStateAction } from 'react';

type Props = {
    setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const TransparentBg = ({ setIsOpen }: Props) => {
    const handleClick = (e: any) => {
        e.stopPropagation(); // Stop the event propagation
        console.log('transparent bg clicked');
        setIsOpen(false);
    };

    return (
        <div
            className='fixed w-screen h-screen top-0 end-0 -z-40 bg-red-300'
            onClick={handleClick}></div>
    );
};

export default TransparentBg;
