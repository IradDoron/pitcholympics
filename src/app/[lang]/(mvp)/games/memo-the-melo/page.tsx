import { memoTheMeloMockData } from '@mocks';
import { GameLevelsLinks } from '@shared';
import { LangParam } from '@types';

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
