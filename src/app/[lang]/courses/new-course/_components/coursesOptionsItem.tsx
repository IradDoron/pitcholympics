import Text from '@/components/core/Text';

type props = {
    name: string;
};

const CoursesOptionsItem = ({ name }: props) => {
    return (
        <div className='w-[200px] h-[130px] bg-blue-500  flex items-center justify-center'>
            <Text className='text-sm'>{name}</Text>
        </div>
    );
};
export default CoursesOptionsItem;
