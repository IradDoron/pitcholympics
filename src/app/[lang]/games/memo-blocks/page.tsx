import { LangParam } from '@/types';
import MemoBlocksGame from '@/components/shared/memoBlocksGame';

const Page = async ({ params: { lang } }: LangParam) => {
    return (
        <div className='h-full flex justify-center items-center'>
            <MemoBlocksGame />
        </div>
    );
};

export default Page;
