import { Items } from '@shared';

// const getColorByIndex = (index: number) => {
//     const colors = ['primary', 'secondary', 'tertiary'];
//     const color = colors[index % colors.length];
//     return color as 'primary' | 'secondary' | 'tertiary';
// }; // TODO: remove this function if not needed

const Page = () => {
    return (
        <div className='flex flex-col w-full items-center'>
            <div className='flex flex-col gap-16'>
                <Items />
            </div>
        </div>
    );
};

export default Page;
