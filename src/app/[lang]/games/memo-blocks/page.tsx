import GameLevelsLinks from '@/components/shared/gameLevelsLinks';
import memoTheMeloMockData from '@/mockData/memoTheMelo';
import { LangParam } from '@/types';
import { getDictionaryServer } from '@/utils/getDictionaryServer';
import MemoGame from '@/components/shared/memoBlocksAsaf/MemoGame';

const Page = async ({ params: { lang } }: LangParam) => {
    const dict = await getDictionaryServer(lang);
    const { page } = dict.app.contact;

    return (
        <>
            {/* <GameLevelsLinks levelsData={memoTheMeloMockData} baseUrl={`/${lang}/memo-blocks`} /> */}
            <MemoGame />
            {/* <MemoBlockIrad initialCoordinates={initialCoordinates} /> */}
        </>
    );
};

export default Page;
