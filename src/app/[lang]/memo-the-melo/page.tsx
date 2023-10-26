
import GameLevelsLinks from '@/components/shared/gameLevelsLinks';
import memoTheMeloMockData from '@/mockData/memoTheMelo';
import { LangParam } from '@/types';
import { getDictionaryServer } from '@/utils/getDictionaryServer';

const Page = async ({ params: { lang } }: LangParam) => {
    const dict = await getDictionaryServer(lang);
    const { page } = dict.app.contact;
    return (
        <>
            <GameLevelsLinks levelsData={memoTheMeloMockData} baseUrl={`/${lang}/memo-the-melo`}/>
        </>
    )
}

export default Page



