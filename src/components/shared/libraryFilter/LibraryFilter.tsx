import { Button, Input } from '@/components/core';
import { FilterObject } from '@/types';

type Props = {
    filterButtons: FilterObject;
    setFilterButtons: React.Dispatch<React.SetStateAction<FilterObject>>;
    inputValue: string;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
};
const LibraryFilter = ({
    filterButtons,
    setFilterButtons,
    inputValue,
    setInputValue,
}: Props) => {
    const handleButtonClick = (value: string) => {
        setFilterButtons(prevFilterObject => {
            return { ...prevFilterObject, [value]: !prevFilterObject[value] };
        });
    };
    const handleInputChange = (value: string) => {
        setInputValue(value);
    };

    const handleSearch = () => {
        console.log('search');
        //search on click or just search on every input and filter change
    };

    return (
        <div className='flex flex-col items-center space-y-2'>
            <div className='flex space-x-3'>
                <Input
                    value={inputValue}
                    onChange={(e: any) => handleInputChange(e.target.value)}
                    placeholder='Filter by name'
                    size='small'
                />

                <Button
                    label='Search'
                    onClick={() => handleSearch()}
                    size='small'
                />
            </div>
            <div className='grid grid-cols-3 gap-3 md:w-64 '>
                {Object.keys(filterButtons).map((key, index) => (
                    <Button
                        key={index}
                        state={filterButtons[key] ? 'clicked' : 'default'}
                        size='small'
                        label={key}
                        onClick={() => {
                            handleButtonClick(key);
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default LibraryFilter;
