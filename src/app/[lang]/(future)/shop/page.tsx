import { Text } from '@core';
import { shopItemsData } from '@mocks';
import { ShopCard } from '@shared';

const Page = () => {
    return (
        <>
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
                <div className='debug'>
                    <Text>Buy it </Text>
                </div>
            </div>
        </>
    );
};

export default Page;
