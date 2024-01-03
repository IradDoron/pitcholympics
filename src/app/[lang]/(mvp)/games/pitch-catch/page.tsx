import { pitchCatchMockData } from '@mocks';
import { GameLevelsLinks } from '@shared';
import { LangParam } from '@types';

const Page = async ({ params: { lang } }: LangParam) => {
    return (
        <div className='h-full'>
            <GameLevelsLinks
                levelsData={pitchCatchMockData}
                lang={lang}
                game='pitch-catch'
            />
        </div>
    );
};

export default Page;
