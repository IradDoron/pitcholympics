import StatsSection from '@/components/shared/stats/statsSection';
import GameProgress from '@/components/shared/stats/gamesProgress';
import { LangParam } from '@/types';
import Achievements from '@/components/shared/stats/achievements';
import PageFiller from '@/components/shared/pageFiller';

const Page = ({ params: { lang } }: LangParam) => {
    return (
        <div>
            <PageFiller />
            <div className='flex flex-col gap-0'>
                <StatsSection type='resources' lang={lang} color='primary' />
                <StatsSection type='gamesStats' lang={lang} color='secondary' />
            </div>
            <GameProgress />
            <Achievements />
        </div>
    );
};

export default Page;
