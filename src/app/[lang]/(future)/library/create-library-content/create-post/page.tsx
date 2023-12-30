'use client';

import { Button, Input, Link } from '@core';

const CreatePost = () => {
    const handleCreatePost = async () => {
        // await POST(newPost); // TODO: create POST function
    };
    return (
        <div className='flex flex-col items-center'>
            <div>content to be created</div>
            <div>
                <div className='flex flex-col m-4 items-center'>
                    TITLE:
                    <Input type='text' placeholder='TITLE' />
                    description:
                    <Input type='text' placeholder='SubTitle' />
                    Topic:
                    <Input type='text' placeholder='Topic' />
                    Tags:
                    <Input type='text' placeholder='Tags' />
                    Content:
                    <Input type='text' placeholder='Content' />
                </div>
                <Link
                    label='preview content (will be popup window?)'
                    url='/library/library/preview-content'></Link>
                {/* i think this should be sent to the admin and the admin need to verify it before add it to the database & library */}
                <Button
                    label='post'
                    onClick={() => handleCreatePost()}></Button>
            </div>
        </div>
    );
};

export default CreatePost;
