'use client';

import { Card } from '@core';
import { useState } from 'react';
import { MenubarItem, Props as MenubarItemProps } from './MenubarItem';

type Props = {
    items: MenubarItemProps[];
    isOpenFromParent: boolean;
};

export const Menubar = ({ items, isOpenFromParent }: Props) => {
    const [isOpen, setIsOpen] = useState(isOpenFromParent);

    const handleToggle = () => setIsOpen(!isOpen);

    return (
        <Card
            className={`${isOpen ? 'absolute' : 'hidden'}`}
            onClick={handleToggle}>
            <div className='flex flex-col gap-4'>
                {items.map((item, index) => {
                    const { label, icon, onClick } = item;
                    return (
                        <MenubarItem
                            key={index}
                            label={label}
                            icon={icon}
                            onClick={onClick}
                        />
                    );
                })}
            </div>
        </Card>
    );
};
