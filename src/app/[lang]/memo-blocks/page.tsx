
import GameLevelsLinks from '@/components/shared/gameLevelsLinks';
import MemoBlockAmit from '@/components/shared/memoBlocks/MemoBlockAmit';
import MemoBlockIrad from '@/components/shared/memoBlocks/MemoBlockIrad';
import memoTheMeloMockData from '@/mockData/memoTheMelo';
import { LangParam } from '@/types';
import { getDictionaryServer } from '@/utils/getDictionaryServer';

const Page = async ({ params: { lang } }: LangParam) => {
    const dict = await getDictionaryServer(lang);
    const { page } = dict.app.contact;
    const initialCoordinates = [
        { row: 0, col: 1 },
        // Add more coordinates as needed
    ];
    return (
        <>
            {/* <GameLevelsLinks levelsData={memoTheMeloMockData} baseUrl={`/${lang}/memo-blocks`} /> */}
            <MemoBlockAmit />
            <MemoBlockIrad initialCoordinates={initialCoordinates} />
        </>
    )
}

export default Page



