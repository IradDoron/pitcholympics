import { Link } from '@core';

const Page = () => {
    return (
        <div>
            <h1>Teaching Page</h1>
            <Link url='teaching/students' label='Students' />
            <Link url='teaching/teachers' label='Teachers' />
            <Link url='teaching/search-teachers' label='Search Teachers' />
            <Link url='teaching/search-schools' label='Search Schools' />
        </div>
    );
};

export default Page;
