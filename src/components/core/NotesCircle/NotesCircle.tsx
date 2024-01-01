type Props = {
    state: 'played' | 'notPlayed' | 'mainNote';
};

export const NotesCircle = ({ state }: Props) => {
    let color = '';

    switch (state) {
        case 'played':
            color = 'bg-green-500';
            break;
        case 'notPlayed':
            color = 'bg-gray-500';
            break;
        case 'mainNote':
            color = 'bg-blue-500';
            break;
        default:
            color = 'bg-gray-500';
    }

    return (
        <div
            className={`w-[30px] h-[30px] rounded-full ${color} border-2 border-black`}></div>
    );
};
