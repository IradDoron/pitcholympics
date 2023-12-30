import type { Collaborator } from '@types';
import NextImage from 'next/image';
import { CardComponentsColor } from './types';

type Props = {
    image: Collaborator['image'];
    alt: Collaborator['firstName'];
    color: CardComponentsColor;
};

export const Image = ({ image, alt, color }: Props) => {
    const baseStyles =
        'flex justify-center rounded-[50%] m-auto w-[160px] h-[160px] border-[6px] sm:w-[200px] sm:h-[200px] sm:border-[8px]';
    const styles = {
        primary: `${baseStyles} border-light-primary-main dark:border-dark-primary-main`,
        secondary: `${baseStyles} border-light-secondary-main dark:border-dark-secondary-main`,
        tertiary: `${baseStyles} border-light-tertiary-main dark:border-dark-tertiary-main`,
    };

    return (
        <div className={styles[color]}>
            <NextImage src={image} alt={alt} />
        </div>
    );
};
