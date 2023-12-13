'use client';
import { PostPage, PostsContainer, PostsForm } from '@shared';
import { useState } from 'react';
import {suggestionPost} from '@/types';

const Page = () => {
    const [posts, setPosts] = useState<suggestionPost[]>([]);
    const [post, setPost] = useState<suggestionPost>({ title: '', content: '', category: '' });
    const addPost = (e: React.MouseEvent<HTMLButtonElement>): void => {
      e.preventDefault();
      setPosts([...posts, post]);
      setPost({ title: '', content: '', category: '' });
      sendPost(post)
      };
     async function sendPost(post:suggestionPost){
      try {
        const response = await fetch('http://localhost:3000/api/suggestions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(post),
        
        });
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
      console.log(JSON.stringify(post))
     }







    function handleChange(
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>
            | React.ChangeEvent<HTMLSelectElement>,
    ) {
        console.log(e.target.name);
       
        setPost({ ...post, [e.target.name]: e.target.value });
        console.log(post);
    }

    return (
        <>
            <PostsForm handleChange={handleChange} addPost={addPost}/>
            <PostsContainer>
              {posts.map((post,index) => (
                <PostPage key={index} title={post.title}  picSrc='' content={post.content} category={post.category}/>
              ))
              }
            </PostsContainer>
        </>
    );
};

export default Page;
