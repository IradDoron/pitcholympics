import { PostPage, PostsContainer, PostsForm } from '@shared';

const Page = () => {
    return (
        <>
            <PostsForm />
            <PostsContainer>
                <PostPage
                    article='heyyy'
                    picSrc=''
                    paragraph='it is awesomeee'
                />
            </PostsContainer>
        </>
    );
};

export default Page;
