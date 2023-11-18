import React from 'react';

type Props = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, no-unused-vars
    onChange: (value: any) => void;
    options: string[];
};
const SelectInput = ({ onChange, options }: Props) => {
    return (
        <select onChange={onChange}>
            {options.map(option => {
                return (
                    <option key={option} value={option}>
                        {option}
                    </option>
                );
            })}
        </select>
    );
};

export default SelectInput;
