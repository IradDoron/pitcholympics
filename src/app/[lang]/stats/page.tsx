import StatsSection from '@/components/shared/stats/statsSection';
import GameProgress from '@/components/shared/stats/gamesProgress';
import { LangParam } from '@/types';
import Achievements from '@/components/shared/stats/achievements';
import PageFiller from '@/components/shared/pageFiller';
import { getServerSession } from 'next-auth';

const Page = async ({ params: { lang } }: LangParam) => {
    const session = await getServerSession();
    if (!session)
        return (
            <div>
                <PageFiller />
                <p className='text-center text-xl text-light-background-onDefault dark:text-dark-background-onDefault'>You need to be logged in to see this page</p>
            </div>
        );

    return (
        <div>
            <PageFiller />
            <div className='flex flex-col gap-0'>
                <StatsSection type='resources' lang={lang} color='primary' />
                <StatsSection type='gamesStats' lang={lang} color='secondary' />
            </div>
            <GameProgress />
            <Achievements lang={lang} />
        </div>
    );
};


export default Page;
