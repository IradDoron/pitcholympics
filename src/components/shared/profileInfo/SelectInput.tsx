type Props = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, no-unused-vars
    onChange: (value: any) => void;
    options: string[];
};

export const SelectInput = ({ onChange, options }: Props) => {
    return (
        <select
            onChange={onChange}
            className='dark:text-light-background-onDefault text-light-background-onDefault'>
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
