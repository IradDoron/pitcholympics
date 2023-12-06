import PageFiller from '@/components/shared/pageFiller';
import ShopCard from '@/components/shared/shopCard';
import { Locale } from '@/i18n.config';
import shopItemsData from '@/mockData/shopMockData';

type Props = {
    params: {
        lang: Locale;
    };
};

const Page = ({ params }: Props) => {
    return (
        <>
            <PageFiller />
            <div className='min-h-full flex flex-col  items-center justify-center gap-6'>
                <div className=' h-full flex items-center justify-center w-[890px] flex-wrap gap-8'>
                    {shopItemsData.map(item => {
                        return (
                            <ShopCard
                                key={item.id}
                                name={item.name}
                                description={item.description}
                                price={item.price}
                                image={item.image}
                                quantity={item.quantity}
                            />
                        );
                    })}
                </div>
                <div className='debug'> Buy it </div>
            </div>
        </>
    );
};

export default Page;
