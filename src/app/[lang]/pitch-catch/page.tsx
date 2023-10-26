import PitchCatch from '@/components/shared/PitchCatch';
import GameLevelsLinks from '@/components/shared/gameLevelsLinks';
import pitchCatchData from '@/mockData/pitchCatch';
import { LangParam } from '@/types';
import { getDictionaryServer } from '@/utils/getDictionaryServer';

const Page = async ({ params: { lang } }: LangParam) => {
    const dict = await getDictionaryServer(lang);
    const { page } = dict.app.contact;
    return (
        <div className='h-full'>
        
           
        <GameLevelsLinks levelsData={pitchCatchData} baseUrl={`/${lang}/pitch-catch`}/>
        
        </div>
    )
}

export default Page



