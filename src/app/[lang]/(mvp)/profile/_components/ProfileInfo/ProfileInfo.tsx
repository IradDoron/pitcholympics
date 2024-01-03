import { Label } from './Label';
import { SelectInput } from './SelectInput';
import { TextInput } from './TextInput';

type Props = {
    label: string;
    isDisabled?: boolean;
    inputType: 'text' | 'select';
    options?: string[];
    // eslint-disable-next-line no-unused-vars
    onChange?: (value: any) => void;
    value?: string;
};

export const ProfileInfo = ({
    label,
    inputType,
    options = [],
    onChange = () => {},
    value = '',
}: Props) => {
    return (
        <Label label={label}>
            {' '}
            {inputType === 'text' ? (
                <TextInput onChange={onChange} value={value} />
            ) : (
                <SelectInput onChange={onChange} options={options} />
            )}
        </Label>
    );
};
