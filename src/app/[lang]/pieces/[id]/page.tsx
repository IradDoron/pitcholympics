import { pieces } from '@/data/piecesData';

type Props = {
    params: {
        id: string;
    };
};

const Page = ({ params }: Props) => {
    const { id } = params;
    const piece = pieces[id];
    console.log(piece);
    const { title } = piece;

    return (
        <>
            <h1>Piece {id}</h1>
        </>
    );
};

export default Page;
