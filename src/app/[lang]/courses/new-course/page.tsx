import { Locale } from '@/i18n.config';
import { Link } from '@core';
import Text from '@/components/core/Text';

type Props = {
    params: {
        lang: Locale;
    };
};

const Page = ({ params }: Props) => {
    const { lang } = params;
    return (
        <div className='flex flex-col items-center justify-center gap-6'>
            <Text className='text-xl'>מה תרצו ללמוד?</Text>

            <div className='flex w-[600px] debug  flex-row flex-wrap items-center justify-center h-1/2 gap-20'>
                <div className='w-[200px] h-[130px] bg-blue-500 debug flex items-center justify-center'>
                    <Text className='text-sm'> פסנתר</Text>
                </div>
                <div className='w-[200px] h-[130px] bg-blue-500 debug flex items-center justify-center'>
                    <Text className='text-sm'> גיטרה</Text>
                </div>
                <div className='w-[200px] h-[130px] bg-blue-500 debug flex items-center justify-center'>
                    <Text className='text-sm'> תופים</Text>
                </div>
                <div className='w-[200px] h-[130px] bg-blue-500 debug flex items-center justify-center'>
                    <Text className='text-sm'> קיובייס</Text>
                </div>
            </div>

            <div className='flex flex-center justify-between items-center w-full'>
                <div className='h-full w-1/4  flex'>
                    <Link
                        label='Search Course Form'
                        url={`/${lang}/courses/new-course/search-course-form`}
                    />
                </div>
                <div className='h-full w-1/4  flex'>
                    <Link label='Back' url={`/${lang}/courses`} />
                </div>
            </div>
        </div>
    );
};

export default Page;
