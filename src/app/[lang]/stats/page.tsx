import Achievements from '@/components/shared/stats/achievements';
import GameProgress from '@/components/shared/stats/gamesProgress';
import StatsSection from '@/components/shared/stats/statsSection';
import { Locale } from '@/i18n.config';
import { PageFiller } from '@shared';
import { getServerSession } from 'next-auth';

type Props = {
    params: {
        lang: Locale;
    };
};

const Page = async ({ params }: Props) => {
    const session = await getServerSession();
    const { lang } = params;

    if (!session)
        return (
            <div>
                <PageFiller />
                <p className='text-center text-xl text-light-background-onDefault dark:text-dark-background-onDefault'>
                    You need to be logged in to see this page
                </p>
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
