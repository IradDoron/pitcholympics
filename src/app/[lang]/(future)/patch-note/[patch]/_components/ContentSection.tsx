type Props = {
    title: string;
    content: { title: string; list: string[] }[];
};
export const ContentSection = ({ title, content }: Props) => {
    return (
        <>
            {/* bug fix Header */}
            <header className='flex items-center mt-14 ml-8'>
                <h2 className='text-2xl text-yellow-500 font-bold font-serif tracking-wider leading-tight m-0'>
                    {title}
                </h2>
            </header>
            {/* bug fix card */}
            <div className='m-10 p-10 border border-solid border-gray-700'>
                {content.map((currentContent, index, arr) => {
                    const { title, list } = currentContent;
                    return (
                        <div key={index}>
                            <h4 className='font-serif line-height-0.85 font-bold'>
                                {title}
                            </h4>
                            <ul className='list-disc my-4 ml-10 text-sm'>
                                {list.map((listItem, index) => {
                                    return (
                                        <li className='my-3' key={index}>
                                            {listItem}
                                        </li>
                                    );
                                })}
                            </ul>
                            {arr.length - 1 > index && (
                                <hr className='border-t border-gray-700 my-6' />
                            )}
                        </div>
                    );
                })}
            </div>
        </>
    );
};
