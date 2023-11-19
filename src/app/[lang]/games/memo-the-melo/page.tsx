import GameLevelsLinks from '@/components/shared/gameLevelsLinks';
import memoTheMeloMockData from '@/mockData/memoTheMelo';
import { LangParam } from '@/types';

const Page = async ({ params: { lang } }: LangParam) => {
    return (
        <GameLevelsLinks
            levelsData={memoTheMeloMockData}
            lang={lang}
            game='memo-the-melo'
        />
    );
};

export default Page;
