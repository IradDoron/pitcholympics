import { IconProps } from '@/types';
import { ICON_COLORS, ICON_SIZES } from '@/constants';

export const PlayIcon = ({
    onClick,
    className,
    color = 'primary',
    size = 'medium',
}: IconProps) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            height='24'
            viewBox='0 -960 960 960'
            width='24'
            strokeWidth={2}
            className={`${ICON_COLORS[color]} ${ICON_SIZES[size]}  ${className}`}
            onClick={onClick}>
            <path
                d='M286-139v-682l537 341-537 341Zm126-341Zm0 111 175-111-175-111v222Z'
                fill='inherit'
            />
        </svg>
    );
};
