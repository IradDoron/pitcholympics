import GameLevelsLinks from '@/components/shared/gameLevelsLinks';
//import MemoBlock from '@/components/shared/memoBlocks/MemoBlock';
import memoTheMeloMockData from '@/mockData/memoTheMelo';
import { LangParam } from '@/types';
import { getDictionaryServer } from '@/utils/getDictionaryServer';
import MemoBlock from '@/components/shared/memoBlocksAsaf/MemoBlock';
import MemoGame from '@/components/shared/memoBlocksAsaf/MemoGame';
import Test from '@/components/shared/memoBlocksAsaf/Test';

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
