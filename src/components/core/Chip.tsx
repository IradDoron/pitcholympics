import { cva, type VariantProps } from 'class-variance-authority';
import type { DetailedHTMLProps, HTMLAttributes } from 'react';

const chip = cva('select-none m-2 flex font-bold place-items-center w-fit', {
    variants: {
        variant: {
            filled: 'bg-red-600 outline-red-200 text-white ',
            outline:
                'bg-transparent border border-gray-600 dark:border-white dark:text-white',
        },
        shape: {
            block: 'rounded-md',
            rounded: 'rounded-full',
        },
        size: {
            sm: 'text-tiny py-1 px-2',
            md: 'text-mini py-2 px-4',
            lg: 'text-small py-4 px-6',
        },
    },
});

type Props = DetailedHTMLProps<
    HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
> &
    VariantProps<typeof chip>;

export const Chip = ({
    children,
    className,
    variant,
    size,
    shape,
    ...props
}: Props) => (
    <span className={chip({ variant, size, shape, className })} {...props}>
        {children}
    </span>
);
