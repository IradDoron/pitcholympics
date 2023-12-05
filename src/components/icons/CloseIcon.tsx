import { IconProps } from '@/types';
import { ICON_COLORS, ICON_SIZES } from '@/constants';

export const CloseIcon = ({
    color = 'primary',
    size = 'medium',
    onClick,
    className,
}: IconProps) => {
    return (
        <svg
            width='16'
            height='16'
            viewBox='0 0 16 16'
            xmlns='http://www.w3.org/2000/svg'
            className={`${ICON_COLORS[color]} ${ICON_SIZES[size]}  ${className}`}
            onClick={onClick}>
            <g id='x-mark-light'>
                <path
                    id='Vector'
                    d='M13.3473 3.60979L11.9704 2.23291L7.79012 6.41322L3.60982 2.23291L2.23293 3.60979L6.41324 7.7901L2.23293 11.9704L3.60982 13.3473L7.79012 9.16698L11.9704 13.3473L13.3473 11.9704L9.16701 7.7901L13.3473 3.60979Z'
                    fill='inherit'
                />
            </g>
        </svg>
    );
};
