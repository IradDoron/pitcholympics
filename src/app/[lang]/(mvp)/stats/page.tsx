import { Locale } from '@/i18n.config';
import { auth } from '@/lib/auth';
import { Achievements, GameProgress, StatsSection } from './_components';

type Props = {
    params: {
        lang: Locale;
    };
};

const Page = async ({ params }: Props) => {
    const session = await auth();
    console.log('session from stats page', session);
    const { lang } = params;

    if (!session)
        return (
            <div>
                <p className='text-center text-xl text-light-background-onDefault dark:text-dark-background-onDefault'>
                    You need to be logged in to see this page
                </p>
            </div>
        );

    return (
        <div>
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
