import { LangParam } from '@/types';
import PostsForm from '@/components/shared/postsForm';
import PostsContainer from '@/components/shared/postsContainer';
import PostPage from '@/components/shared/postPage';


const Page = ({ params: { lang } }: LangParam) => {
    return (
        <>
        <PostsForm/>
        <PostsContainer>
         <PostPage/>
        </PostsContainer>
        
        </>
    );
};

export default Page;
