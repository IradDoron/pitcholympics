import PitchCatch from '@/components/shared/PitchCatch';
import { LangParam } from '@/types';
import { getDictionaryServer } from '@/utils/getDictionaryServer';

const Page = async ({ params: { lang } }: LangParam) => {
    const dict = await getDictionaryServer(lang);
    const { page } = dict.app.contact;
    return (
        <div className='h-full'>
        
            <PitchCatch />
        
        </div>
    )
}

export default Page



