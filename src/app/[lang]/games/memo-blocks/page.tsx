import { GameLevelsLinks } from '@shared';
import { memoBlocksLevels } from '@/mockData/memoBlocks';
import { LangParam } from '@/types';

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
