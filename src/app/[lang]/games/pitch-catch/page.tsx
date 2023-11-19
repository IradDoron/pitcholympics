import GameLevelsLinks from '@/components/shared/gameLevelsLinks';
import pitchCatchData from '@/mockData/pitchCatch';
import { LangParam } from '@/types';

const Page = async ({ params: { lang } }: LangParam) => {
    return (
        <div className='h-full'>
            <GameLevelsLinks
                levelsData={pitchCatchData}
                lang={lang}
                game='pitch-catch'
            />
        </div>
    );
};

export default Page;
