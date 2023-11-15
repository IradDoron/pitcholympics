import { LangParam } from '@/types';
import GameLink from '@/components/shared/gameLink/GameLink';

const Home = async ({ params: { lang } }: LangParam) => {
    return (
        <div className='h-full flex flex-col justify-center items-center gap-10 sm:flex-row sm:gap-20'>
            <GameLink
                href='memo-the-melo'
                colorType='peach'
                label='Memo the Melo'
                lang={lang}
            />
            <GameLink
                href='pitch-catch'
                colorType='lambada'
                label='Pitch Catch'
                lang={lang}
            />
            <GameLink
                href='memo-blocks'
                colorType='peach'
                label='memo-blocks'
                lang={lang}
            />
        </div>
    );
};

export default Home;
