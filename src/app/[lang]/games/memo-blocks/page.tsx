
import { LangParam } from '@/types';
import { getDictionaryServer } from '@/utils/getDictionaryServer';
import MemoBlocksGame from '@/components/shared/memoBlocks';

const Page = async ({ params: { lang } }: LangParam) => {
    const dict = await getDictionaryServer(lang);
    const { page } = dict.app.contact;

    return (
        <div className='h-full flex justify-center items-center'>
            <MemoBlocksGame />
        </div>
    );
};

export default Page;
