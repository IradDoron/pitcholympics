type Props = {
    state: 'played' | 'notPlayed' | 'mainNote';
};

export const NotesCircle = ({ state }: Props) => {
    return (
        (state === 'played' && (
            <div className='w-32 h-32 rounded-full bg-green-500'></div>
        )) ||
        (state === 'notPlayed' && (
            <div className='w-32 h-32 rounded-full bg-gray-500 '></div>
        )) ||
        (state === 'mainNote' && (
            <div className='w-32 h-32 rounded-full bg-blue-500 '></div>
        ))
    );
};
