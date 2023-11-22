import { IconProps } from '@/types';

type Props = {
    size: IconProps['size'];
};

const VMark = ({ size = 'medium' }: Props) => {
    const sizes = {
        small: 'w-[112px] h-[18px]',
        medium: 'w-[130px] h-[25px]',
        large: 'w-[178px] h-[34px]',
    };
    return (
        <svg
            viewBox='0 0 21 21'
            className={`${sizes[size]}`}
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <g id='v-mark-light'>
                <path
                    id='Vector'
                    d='M2.57251 11.5942L4.39126 9.77543L7.72265 13.1055L16.1978 4.63043L18.0165 6.44919L7.72136 16.743L2.57251 11.5942Z'
                    fill='inherit'
                />
            </g>
        </svg>
    );
};

export default VMark;
