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
        <div className='flex flex-col justify-center items-center gap-4'>
            <Text className='text-xl'>שׁם הקורס</Text>
            <form className='flex flex-col items-center justify-center gap-4'>
                <label className='text-l flex flex-row gap-3'>
                    <Text> גיל: </Text>
                    <input
                        className='w-[200px] h-[30px] bg-blue-500 debug flex items-center justify-center'
                        type='text'
                        placeholder=''
                        name='age'
                    />
                </label>
                <label className='text-l flex flex-row gap-3'>
                    <Text> רמת נגינה רצויה: </Text>
                    <select
                        id='experience'
                        name='experience'
                        className='block w-full p-2 border border-gray-300 rounded-md'>
                        <option value='beginner'>Beginner</option>
                        <option value='intermediate'>Intermediate</option>
                        <option value='advanced'>Advanced</option>
                    </select>
                </label>

                <label className='text-l flex flex-row gap-3'>
                    <Text> סגנונות מוזיקליים: </Text>
                    <select
                        id='experience'
                        name='experience'
                        className='block w-full p-2 border border-gray-300 rounded-md'>
                        <option value='beginner'>Jazz</option>
                        <option value='intermediate'>Rock</option>
                        <option value='advanced'>House</option>
                    </select>
                </label>
                <label className='text-l flex flex-row gap-3'>
                    <Text> מידת ניסיון קודם: </Text>
                    <input
                        className='w-[200px] h-[30px] bg-blue-500 debug flex items-center justify-center'
                        type='text'
                        placeholder=''
                        name='age'
                    />
                </label>
            </form>
            <Link
                label='Choose Course'
                url={`/${lang}/courses/new-course/search-course-form/choose-course`}
            />
            <Link label='Back' url={`/${lang}/courses/new-course`} />
        </div>
    );
};

export default Page;
