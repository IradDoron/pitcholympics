import Link from '@/components/core/link';
import React from 'react';

const PreviewContant = () => {
    return (
        <div>
            will preview the post before post it
            <Link label='Post' url='/library/library/preview-content'></Link>;
            <Link
                label='back to edit'
                url='/library/library/preview-content'></Link>
            ;
        </div>
    );
};

export default PreviewContant;
