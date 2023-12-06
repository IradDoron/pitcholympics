type Props = {
    name: string;
    description: string;
    price: number;
    image: string;
    quantity: number;
};

const ShopCard = ({ name, description, price, image, quantity }: Props) => {
    return (
        <>
            <div className='h-[180px] w-[180px]  flex flex-wrap  justify-between p-4 '>
                <div className='rounded overflow-hidden shadow-lg bg-white m-2 flex flex-col justify-center items-center'>
                    <img src={image} alt='' className='w-full' />
                    <p className='font-bold text-sm mb-2'>{name}</p>
                    <p className='text-gray-700 text-sm'>{description}</p>
                    <div className="flex flex-row justify-between items-start gap-12">
                    <span className='text-sm text-gray-600'>${price}</span>
                    <span className='text-sm text-gray-600'>{quantity}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShopCard;
