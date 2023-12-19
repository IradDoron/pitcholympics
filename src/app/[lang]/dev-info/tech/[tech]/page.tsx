type Props = {
    params: {
        tech: string;
    };
};

const Page = ({ params }: Props) => {
    const { tech } = params;
    return (
        <div>
            <h1>{tech}</h1>
        </div>
    );
};

export default Page;
