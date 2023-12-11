'use client';
import { Locale } from '@/i18n.config';
import { Link } from '@core';
import Text from '@/components/core/Text';
import FormInput from '../_components/formInput';
import FormSelect from '../_components/formSelect';
import { useEffect, useState } from 'react';

type Props = {
    params: {
        lang: Locale;
    };
};

const Page = ({ params }: Props) => {
    const { lang } = params;
    const [state, setState] = useState({
        age: '',
        diffcultyLevel: '',
        musicStyle: '',
        experience: '',
    });

    function handleChange(
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLSelectElement>,
    ) {
        const { name, value } = e.target;
        setState(prevState => ({
            ...prevState,
            [name]: value,
        }));
    }

    useEffect(() => {
        localStorage.setItem('formNewCourse', JSON.stringify(state));
    }, [state]);

    return (
        <div className='flex flex-col justify-center items-center gap-4'>
            <Text className='text-xl'>שׁם הקורס</Text>
            <form className='flex flex-col items-center justify-center gap-4'>
                <FormInput name={'age'} onChange={handleChange} />
                <FormSelect
                    label={'diffcultyLevel'}
                    option={['Beginner', 'Intermediate', 'Advanced']}
                    onChange={handleChange}
                />
                <FormSelect
                    label={'musicStyle'}
                    option={['Jazz', 'Rock', 'House']}
                    onChange={handleChange}
                />

                <FormInput name={'experience'} onChange={handleChange} />
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
