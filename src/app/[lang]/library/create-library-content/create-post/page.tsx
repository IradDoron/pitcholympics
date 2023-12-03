'use client';
import Button from '@/components/core/button';
import Input from '@/components/core/input/Input';
import Link from '@/components/core/link';
import { PostType } from '@/types/libraryPageTypes/contentElements';
import React from 'react';
import { POST } from '../../../../api/library-content/route';

const CreatePost = () => {
    const newPost: PostType = {
        //  type: 'post',
        title: 'title',
        description: 'des',
        topic: 'topicccc',
        tags: ['tag1', 'tag2'],
        content: 'i am content',
    };

    const handleCreatePost = async () => {
        await POST(newPost);
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
