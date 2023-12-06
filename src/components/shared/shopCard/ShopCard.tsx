import Text from "@/components/core/Text";
type Props = {
    name: string;
    description: string;
    price: number;
    image: string;
    quantity: number;
};

const ShopCard = ({ name, description, price, image, quantity }: Props) => {
    return (
        <div className=' rounded  shadow-lg  m-2  flex-col  items-center w-[180px] flex p-4'>
            <img src={image} alt='' className='w-full' />
            <Text >{name}</Text>
            <Text >{description}</Text>
            <div className='flex flex-row justify-between items-start gap-12'>
                <Text className='text-sm text-gray-600'>${price}</Text>
                <Text className='text-sm text-gray-600'>{quantity}</Text>
            </div>
        </div>
    );
};

export default ShopCard;
