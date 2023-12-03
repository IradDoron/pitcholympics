'use client';
import LibraryFilter from '@/components/shared/libraryFilter/LibraryFilter';
import { FilterObject } from '@/types';
import { useState } from 'react';

const Page = () => {
    const [inputValue, setInputValue] = useState('');

    const [filterButtons, setFilterButtons] = useState<FilterObject>({
        module: false,
        article: false,
        book: false,
        course: false,
        test: false,
        post: false,
    });

    return (
        <div>
            <LibraryFilter
                filterButtons={filterButtons}
                setFilterButtons={setFilterButtons}
                inputValue={inputValue}
                setInputValue={setInputValue}
            />
        </div>
    );
};

export default Page;
