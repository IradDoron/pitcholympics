type props = {
    title: string;
    picSrc: string;
    content: string;
    category: string;
};

const PostPage = ({ title, picSrc, content, category }: props) => {
    return (
        <div className='flex flex-col bg-white h-[40%] w-[60%] items-center justify-center rounded-lg'>
            <div className='w-full flex flex-row  justify-center'>
                <div className='w-10 h-10 rounded-full bg-slate-500'>
                    <img src={picSrc} />
                </div>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <h1>{title}</h1>
                <p>{content}</p>
                <p>{category}</p>
            </div>
        </div>
    );
};

export default PostPage;
