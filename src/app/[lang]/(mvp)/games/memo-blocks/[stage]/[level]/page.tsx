import { Locale } from '@/i18n.config';
import { memoBlocksLevels } from '@mocks';
import { MemoBlocksLevel } from '@shared';
import { MatrixWithId, MemoBlocksGame } from '@types';
import { parseTable } from '@utils';

type Props = {
    params: {
        lang: Locale;
        stage: number;
        level: number;
    };
};

const getLevelData = function (
    stage: number,
    level: number,
    levelsData: MemoBlocksGame,
): MatrixWithId[] {
    return levelsData[stage - 1][level - 1].map(card => parseTable(card));
};

const Page = async ({ params: { level, stage, lang } }: Props) => {
    const currentLevel = getLevelData(stage, level, memoBlocksLevels);
    return (
        <div className='h-full flex justify-center items-center'>
            <MemoBlocksLevel
                levelData={currentLevel}
                level={level}
                stage={stage}
                lang={lang}
            />
        </div>
    );
};

export default Page;
