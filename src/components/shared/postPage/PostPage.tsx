const PostPage = () => {
    return (
        <div className='flex flex-col bg-white h-[40%] w-[60%] items-center justify-center rounded-lg'>
            <div className='w-full flex flex-row items-center justify-evenly'>
                <h1>an Article</h1>
                <div className='w-10 h-10 rounded-full bg-slate-500'></div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius obcaecati dolor, voluptas magnam recusandae quo expedita. Quidem distinctio provident accusantium nobis, modi vitae quas qui animi cum molestiae ipsum suscipit.</p>
            </div>
        </div>
    );
};

export default PostPage;
