import { ChangeEventHandler } from 'react';

type InputSize = 'small' | 'medium' | 'large';
type InputColor = 'default' | 'disabled';

interface InputProps {
    value?: string;
    type?: string;
    placeholder?: string;
    onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
    color?: InputColor;
    size?: InputSize;
    className?: string;
}
export const Input = ({
    value,
    type,
    placeholder,
    onChange,
    color = 'default',
    size = 'medium',
    className = '',
}: InputProps) => {
    const getSize = (size: InputSize) => {
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

    const getColor = (state: InputColor) => {
        switch (state) {
            case 'default':
                return 'border  border-light-primary-dark p-1 rounded-md dark:bg-dark-primary-main dark:text-dark-primary-contrastText dark:placeholder:text-dark-surface-secondary';
            case 'disabled':
                return 'bg-grey-A00 dark:bg-grey-300 text-grey-100 dark:text-dark-background-onDefault cursor-not-allowed';
            default:
                return 'border  border-light-primary-dark p-1 rounded-md dark:bg-dark-primary-main dark:text-dark-primary-contrastText dark:placeholder:text-dark-surface-secondary';
        }
    };

    const inputSize = getSize(size);
    const inputColor = getColor(color);

    return (
        <input
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            type={type}
            className={`${inputSize} ${inputColor} ${className}`}
        />
    );
};
