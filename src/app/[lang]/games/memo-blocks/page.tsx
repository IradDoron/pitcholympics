
import { LangParam } from '@/types';
import { getDictionaryServer } from '@/utils/getDictionaryServer';
import MemoGame from '@/components/shared/memoBlocksAsaf/MemoGame';

const Page = async ({ params: { lang } }: LangParam) => {
    const dict = await getDictionaryServer(lang);
    const { page } = dict.app.contact;

    return (
        <MemoGame />
    );
};

export default Page;
