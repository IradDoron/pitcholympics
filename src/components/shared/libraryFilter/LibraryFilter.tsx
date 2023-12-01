'use client';

import Button from '@/components/core/button';
import Input from '@/components/core/input/Input';
import { useState } from 'react';

interface LibraryFilterProps {
    filters: { label: string; isOn: boolean }[];
}
//how the tailwind knbw when its darl
const LibraryFilter = () => {
    const [inputValue, setInputValue] = useState('');
    const [filterButtons, setFilterButtons] = useState([
        { label: 'Module', isOn: false },
        { label: 'Article', isOn: false },
        { label: 'Book', isOn: false },
        { label: 'Course', isOn: false },
        { label: 'Test', isOn: false },
        { label: 'Post', isOn: false },
    ]);
    const handleValueChange = (value: string) => {
        setInputValue(value);
    };
    const handleFilterOn = (clicked: any) => {
        setFilterButtons(prevFilterButtons => {
            return prevFilterButtons.map(filterButton => {
                if (filterButton.label === clicked) {
                    return { ...filterButton, isOn: !filterButton.isOn };
                }
                return filterButton;
            });
        });
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
                    onChange={(e: any) => handleValueChange(e.target.value)}
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
                {filterButtons.map(filter => (
                    <Button
                        state={!filter.isOn ? 'default' : 'clicked'}
                        size='small'
                        label={filter.label}
                        onClick={(e: any) => {
                            handleFilterOn(e.target.textContent!);
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default LibraryFilter;
