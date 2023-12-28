type Props = {
    tags: string[];
};

export const Tags = ({ tags }: Props) => {
    return (
        <div className='flex flex-wrap justify-center'>
            {tags.map((tag, index) => (
                <span
                    key={index}
                    className='m-1 text-xs text-white bg-gray-700 rounded-full px-2 py-1'>
                    {tag}
                </span>
            ))}
        </div>
    );
};
