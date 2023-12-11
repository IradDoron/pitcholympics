type Props = {
    params: {
        id: string;
    };
};
const Page = ({ params }: Props) => {
    const { id } = params;
    return <h1>Adventure: {id}</h1>;
};

export default Page;
