import { Card } from '@/components/core';
import { Locale } from '@/i18n.config';
import { css } from '@emotion/css';
import { CloseIcon } from '@icons';
import { useState } from 'react';
import { MobileNavContent } from './MobileNavContent';
import { MobileNavTrigger } from './MobileNavTrigger';

type Props = {
    lang: Locale;
};

export const MobileNav = ({ lang }: Props) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <MobileNavTrigger setOpen={setIsOpen} />
            <div className={`${isOpen ? 'block' : 'hidden'}`}>
                <Card
                    styles={css`
                        width: 100vw;
                        height: 100vh;
                        z-index: 50;
                        position: fixed;
                        top: 0px;
                        inset-inline-end: 0px;
                    `}>
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
