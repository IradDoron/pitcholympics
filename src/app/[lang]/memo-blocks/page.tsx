
import GameLevelsLinks from '@/components/shared/gameLevelsLinks';
import MemoBlock from '@/components/shared/memoBlocks/MemoBlock';
import memoTheMeloMockData from '@/mockData/memoTheMelo';
import { LangParam } from '@/types';
import { getDictionaryServer } from '@/utils/getDictionaryServer';

const Page = async ({ params: { lang } }: LangParam) => {
    const dict = await getDictionaryServer(lang);
    const { page } = dict.app.contact;

    return (
        <>
            {/* <GameLevelsLinks levelsData={memoTheMeloMockData} baseUrl={`/${lang}/memo-blocks`} /> */}
            <MemoBlock />
            {/* <MemoBlockIrad initialCoordinates={initialCoordinates} /> */}
        </>
    )
}

export default Page



