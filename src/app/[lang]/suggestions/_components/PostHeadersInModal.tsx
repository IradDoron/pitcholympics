type Props = {
    title: string;
    content: string;
};

export const PostHeadersInModal = ({ title, content }: Props) => {
    return (
        <div className='post-headers'>
            <h1>Post a Suggestion</h1>
            <p>Let us know what you think would make Pitch better!</p>
            <h1>title:{title}</h1>
            <p>content:{content}</p>
        </div>
    );
};


