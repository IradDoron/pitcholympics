type props = {
    article: string;
    picSrc: string;
    paragraph: string;
};

const PostPage = ({ article, picSrc, paragraph }: props) => {
    return (
        <div className='flex flex-col bg-white h-[40%] w-[60%] items-center justify-center rounded-lg'>
            <div className='w-full flex flex-row  justify-center'>
                <div className='w-10 h-10 rounded-full bg-slate-500'>
                    <img src={picSrc} />
                </div>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <h1>{article}</h1>
                <p>{paragraph}</p>
            </div>
        </div>
    );
};

export default PostPage;
