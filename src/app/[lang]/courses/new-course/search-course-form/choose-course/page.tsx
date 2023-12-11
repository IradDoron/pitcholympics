import { Locale } from '@/i18n.config';
import { Link, Text } from '@core';

type Props = {
    params: {
        lang: Locale;
    };
};

const Page = ({ params }: Props) => {
    const { lang } = params;
    return (
        <div className='flex flex-col justify-center items-center gap-6'>
            <div className='w-[200px] h-[130px] bg-blue-500  flex items-center justify-center'>
                <Text className='text-sm'> הקורס המומלץ ביותר</Text>
            </div>

            <div className='flex w-[700px]  flex-row items-center justify-center h-1/2 gap-20'>
                <div className='w-[200px] h-[130px] bg-blue-500 flex items-center justify-center'>
                    <Text className='text-sm'> קורס מומלץ</Text>
                </div>
                <div className='w-[200px] h-[130px] bg-blue-500 flex items-center justify-center'>
                    <Text className='text-sm'> קורס מומלץ</Text>
                </div>
                <div className='w-[200px] h-[130px] bg-blue-500 flex items-center justify-center'>
                    <Text className='text-sm'> קורס מומלץ</Text>
                </div>
            </div>
            <Link
                label='Syllabus'
                url={`/${lang}/courses/new-course/search-course-form/choose-course/syllabus/1`}
            />
            <Link
                label='Back'
                url={`/${lang}/courses/new-course/search-course-form`}
            />
        </div>
    );
};

export default Page;
