import { Button } from '@/components/core/Button';
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
            <div className='flex flex-col  h-full items-center justify-center gap-5'>
                <div className=' h-full flex items-center justify-center w-[890px] flex-wrap'>
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
                <button > Buy it  </button>
            </div>
        </>
    );
};

export default Page;
