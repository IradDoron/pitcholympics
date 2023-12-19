import React from 'react';

type Props = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, no-unused-vars
    onChange: (event: any) => void;
    value: string;
    disabled?: boolean;
};
const getStyle = (isDisabled: boolean) => {
    if (isDisabled) {
        return 'dark:text-dark-background-onDefault text-light-background-onDefault ';
    } else {
        return 'text-grey-500 dark:text-grey-D00 border-2';
    }
};

const TextInput = ({ onChange, value, disabled = false }: Props) => {
    return (
        <input
            className={getStyle(disabled)}
            value={value}
            onChange={onChange}
            disabled
        />
    );
};

export default TextInput;
