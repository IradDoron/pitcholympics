type Props = {
    title: string;
    picSrc: string;
    content: string;
    category: string;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const PostPage = ({
    title,
    picSrc,
    content,
    category,
    setIsModalOpen,
}: Props) => {
    function handleComment() {
        setIsModalOpen(true);
    }

    return (
        <div className='flex flex-col bg-white items-center justify-center rounded-lg'>
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
            <button onClick={handleComment}>Comment</button>
        </div>
    );
};
