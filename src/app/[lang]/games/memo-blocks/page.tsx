
import { LangParam } from '@/types';
import { getDictionaryServer } from '@/utils/getDictionaryServer';
import MemoGame from '@/components/shared/memoBlocks/MemoGame2';

const Page = async ({ params: { lang } }: LangParam) => {
    const dict = await getDictionaryServer(lang);
    const { page } = dict.app.contact;

    return (
        <div className='h-full flex justify-center items-center'>
            <MemoGame />
        </div>
    );
};

export default Page;
