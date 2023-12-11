import { Text } from '@core';
import { ChangeEvent } from 'react';

type Props = {
    label: string;
    onChange: (
        e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>,
    ) => void;
};

const FormInput = ({ label, onChange }: Props) => {
    return (
        <div>
            <label className='text-l flex flex-row gap-3'>
                <Text>{label}:</Text>
                <input
                    className='w-[200px] h-[30px] bg-blue-500 debug flex items-center justify-center'
                    type='text'
                    name={label}
         
                    onChange={onChange}
                />
            </label>
        </div>
    );
};

export default FormInput;
