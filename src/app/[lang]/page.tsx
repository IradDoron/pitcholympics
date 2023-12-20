import { LangParam } from '@/types';
import { GameLink } from '@shared';
import Loading from './loading';
import MyDivComponent from './_components/myDiv';
import { getUsesrService } from '@/app/services/getUsersService';

const Home = async ({ params }: LangParam) => {
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

export default Home;
{
    /*  */
}
{
    /* <GameLink
                href='memo-blocks'
                colorType='peach'
                label='memo-blocks'
                lang={lang}
            /> */
}
