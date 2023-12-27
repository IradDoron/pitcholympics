import { IconProps } from '@/types';
import { ICON_COLORS, ICON_SIZES } from '@/constants';

const CursorBigIcon = ({ color = 'primary', size = 'large' }: IconProps) => {
    return (
        <div>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                className={`${ICON_COLORS[color]}  ${ICON_SIZES[size]}`}>
                <path d='m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z' />
                <path d='m13 13 6 6' />
            </svg>
        </div>
    );
};
export default CursorBigIcon;
