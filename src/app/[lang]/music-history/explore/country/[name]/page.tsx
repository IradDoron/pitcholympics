type Props = {
    params: {
        name: string;
    };
};

const Page = ({ params }: Props) => {
    const { name } = params;
    return (
        <>
            <h1>Explore</h1>
            <h2>Country</h2>
            <h3>{name}</h3>
        </>
    );
};

export default Page;
