import Text from '@/components/core/Text';
import { ChangeEvent } from 'react';

type Props = {
    label: string;
    option: string[];
    onChange: (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => void;
};

const FormSelect = ({ label: name, option,onChange }: Props) => {
    return (
        <label className='text-l flex flex-row gap-3'>
            <Text> {name}: </Text>
            <select className='block w-full p-2 border border-gray-300 rounded-md' onChange={onChange} name={name}>
                {option.map((item, i) => (
                    <option value={item} key={i}>
                        {item}
                    </option>
                ))}
            </select>
        </label>
    );
};
export default FormSelect;
