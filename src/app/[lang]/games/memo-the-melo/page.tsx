import memoTheMeloMockData from '@/mockData/memoTheMelo';
import { LangParam } from '@/types';
import { GameLevelsLinks } from '@shared';

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
