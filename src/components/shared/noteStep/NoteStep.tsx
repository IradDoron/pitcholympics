type Props = {
    state: 'Played' | 'Current' | 'NotPlayed';
};

export const NoteStep = ({ state }: Props) => {
    return (
        (state == 'Played' && (
            <div className='w-24 h-24 rounded-md hover:shadow-2xl flex flex-row items-center justify-center bg-green-500 text-white text-center mt-[20px]'>
                Played
            </div>
        )) ||
        (state == 'Current' && (
            <div className='w-24 h-24 rounded-md hover:shadow-2xl flex flex-row items-center justify-center bg-gray-500 text-white text-center mt-[20px]'>
                Current
            </div>
        )) ||
        (state == 'NotPlayed' && (
            <div className='w-24 h-24 rounded-md hover:shadow-2xl flex flex-row items-center justify-center bg-red-600 text-white text-center mt-[20px]'>
                NotPlayed
            </div>
        ))
    );
};
