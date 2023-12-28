import { LangParam } from '@/types';
import { GameLink } from '@shared';
import Loading from './loading';

const Page = ({ params }: LangParam) => {
    return (
        <div className='h-full flex flex-col justify-center items-center gap-10 sm:flex-row sm:gap-20'>
            {params ? (
                <>
                    <GameLink
                        href='memo-the-melo'
                        colorType='peach'
                        label='Memo the Melo'
                        lang={params.lang}
                    />
                    <GameLink
                        href='pitch-catch'
                        colorType='lambada'
                        label='Pitch Catch'
                        lang={params.lang}
                    />
                    <GameLink
                        href='memo-blocks'
                        colorType='peach'
                        label='Memo Blocks'
                        lang={params.lang}
                    />
                </>
            ) : (
                <Loading />
            )}
        </div>
    );
};

export default Page;
