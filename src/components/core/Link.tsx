import React from 'react';
import NextLink from 'next/link';

type LinkSizeType = 'small' | 'medium' | 'large';
type LinkColorType = 'default' | 'green';

type Props = {
    label: string;
    url: string;
    size?: LinkSizeType;
    color?: LinkColorType;
};

const getSize = (size: LinkSizeType) => {
    switch (size) {
        case 'small':
            return 'px-2 py-1 text-xs';
        case 'medium':
            return 'px-4 py-2 text-base';
        case 'large':
            return 'px-6 py-3 text-xl';
        default:
            return 'px-6 py-3 text-xl';
    }
};

const getColor = (state: LinkColorType) => {
    switch (state) {
        case 'default':
            return 'bg-light-primary-main dark:bg-dark-primary-main text-light-primary-contrastText dark:text-dark-primary-contrastText';
        case 'green':
            return 'bg-green-A00 dark:bg-green-300 text-light-primary-contrastText dark:text-dark-primary-contrastText';
        default:
            return 'bg-light-primary-main dark:bg-dark-primary-main text-light-primary-contrastText dark:text-dark-primary-contrastText';
    }
};

export const Link = ({ label, url, size = 'medium', color = 'default' }: Props) => {
    const linkSize = getSize(size);
    const linkColor = getColor(color);
    return (
        <NextLink
            className={`shadow-large-light dark:shadow-large-dark rounded-[12px] ${linkSize} ${linkColor}`}
            href={url}>
            {label}
        </NextLink>
    );
}

export default Link;
