import { Link } from '@core';

const ChooseContent = () => {
    return (
        <div>
            will be display links to content you want to make and move you to
            the right page
            <br></br>
            <Link
                label='Create Post'
                url='/library/library/create-library-content/create-post'></Link>
        </div>
    );
};

export default ChooseContent;
