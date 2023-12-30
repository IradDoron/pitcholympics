import { memoBlocksLevels } from '@mocks';
import { GameLevelsLinks } from '@shared';
import { LangParam } from '@types';

const Page = async ({ params: { lang } }: LangParam) => {
    return (
        <div className='h-full'>
            <GameLevelsLinks
                levelsData={memoBlocksLevels}
                lang={lang}
                game='memo-blocks'
            />
        </div>
    );
};

export default Page;
