import { Locale } from '@/i18n.config';
import { Link } from '@core';
import Text from '@/components/core/Text';
import SubjectsGridItem from './_components/subjectsGridItem';
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
            <div className='flex w-[600px]   flex-row flex-wrap items-center justify-center h-1/2 gap-20'>
                <SubjectsGridItem subject='פסנתר' />
                <SubjectsGridItem subject='גיטרה' />
                <SubjectsGridItem subject='תופים' />
                <SubjectsGridItem subject='קיובייס' />
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
