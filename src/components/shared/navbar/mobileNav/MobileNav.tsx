import { Locale } from '@/i18n.config';
import { Card } from '@/components/core';
import { CloseIcon } from '@icons';
import { useState } from 'react';
import MobileNavContent from './MobileNavContent';
import MobileNavTrigger from './MobileNavTrigger';

type Props = {
    lang: Locale;
};

const MobileNav = ({ lang }: Props) => {
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
                    <MobileNavContent lang={lang} handleClose={handleClose} />
                </Card>
            </div>
        </div>
    );
};

export default MobileNav;
