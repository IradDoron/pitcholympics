import { Text } from '@core';
import { ChangeEvent } from 'react';

type Props = {
    name: string;
    onChange: (
        e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>,
    ) => void;
};

const FormInput = ({ name, onChange }: Props) => {
    return (
        <div>
            <label className='text-l flex flex-row gap-3'>
                <Text>{name}:</Text>
                <input
                    className='w-[200px] h-[30px] bg-blue-500 debug flex items-center justify-center'
                    type='text'
                    name={name}
                    onChange={onChange}
                />
            </label>
        </div>
    );
};

export default FormInput;
