import HamburgerIcon from '@/components/icons/hamburgerIcon';
import { Dispatch, SetStateAction } from 'react';

type Props = {
    setOpen: Dispatch<SetStateAction<boolean>>;
};

const MobileNavTrigger = ({ setOpen }: Props) => {
    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <div className='fixed top-2 end-2 sm:hidden'>
            <HamburgerIcon onClick={handleOpen} className='cursor-pointer' />
        </div>
    );
};

export default MobileNavTrigger;
