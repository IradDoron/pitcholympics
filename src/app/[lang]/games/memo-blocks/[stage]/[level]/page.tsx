import MemoBlocksLevel from '@/components/shared/memoBlocksGame';
import { Locale } from '@/i18n.config';
import { parseTable } from '@/lib/utils';
import { memoBlocksLevels } from '@/mockData/memoBlocks';
import { MatrixWithId, MemoBlocksGame } from '@/types';

type Props = {
    params: {
        lang: Locale;
        stage: number;
        level: number;
    };
};

const getLevelData = function (stage: number, level: number, levelsData: MemoBlocksGame): MatrixWithId[] {
    return levelsData[stage - 1][level - 1].map(card => parseTable(card));
};


const Page = async ({ params: { level, stage, lang } }: Props) => {
    const currentLevel = getLevelData(stage, level, memoBlocksLevels);
    return (
        <div className='h-full flex justify-center items-center'>
            <MemoBlocksLevel levelData={currentLevel} level={level} stage={stage} lang={lang} />
        </div>
    );
};

export default Page;
