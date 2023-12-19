'use client';
import LibraryFilter from '@/components/shared/libraryFilter/LibraryFilter';
import { FilterObject } from '@/types';
import { useState } from 'react';
import { Link } from '@/components/core';

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
    //toAsk - why the main routing is /library
    return (
        <div>
            <Link
                label='Create Library Content'
                url='/library/library/create-library-content'></Link>
            <LibraryFilter
                filterButtons={filterButtons}
                setFilterButtons={setFilterButtons}
                inputValue={inputValue}
                setInputValue={setInputValue}
            />
            will be displayed a list of posts and every post will be a link to
            its full post content
            <Link
                color='green'
                label='A POST'
                url='/library/library/posts/1'></Link>
        </div>
    );
};

export default Page;
