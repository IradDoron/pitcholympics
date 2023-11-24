import { useState } from 'react';
import CloseIcon from '@/components/icons/closeIcon';
import MobileNavTrigger from './MobileNavTrigger';
import Card from '@core/card';

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <MobileNavTrigger setOpen={setIsOpen} />
            <div className={`${isOpen ? 'block' : 'hidden'}`}>
                <Card
                    className='w-screen h-screen z-50 fixed top-0 end-0 '
                    color='primary'>
                    <CloseIcon
                        onClick={handleClose}
                        className='absolute top-2 end-2 cursor-pointer'
                    />
                    Mobile Nav
                </Card>
            </div>
        </div>
    );
};

export default MobileNav;
