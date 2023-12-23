import {PageFiller} from '@/components/shared/pageFiller';
import Items from '@/components/shared/items' ;

const getColorByIndex = (index: number) => {
    const colors = ['primary', 'secondary', 'tertiary'];
    const color = colors[index % colors.length];
    return color as 'primary' | 'secondary' | 'tertiary';
};

const Page = async () => {
    return (
        <div className='flex flex-col w-full items-center'>
            <PageFiller />
            <div className='flex flex-col gap-16'>
               <Items/>
            </div>
        </div>
    );
};

export default Page;
