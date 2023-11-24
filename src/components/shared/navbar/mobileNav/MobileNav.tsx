import CloseIcon from '@/components/icons/closeIcon';
import Card from '@core/card';
import { useState } from 'react';
import MobileNavContent from './MobileNavContent';
import MobileNavTrigger from './MobileNavTrigger';

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
                    <MobileNavContent />
                </Card>
            </div>
        </div>
    );
};

export default MobileNav;
