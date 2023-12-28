import { pianoAccompanimentPatterns } from '@/data/pianoData';
import { Locale } from '@/i18n.config';
import { PianoAccompanimentPatternCard } from './_components';

type Props = {
    params: {
        lang: Locale;
    };
};

const Page = ({ params }: Props) => {
    const { lang } = params;
    return (
        <div>
            <h1 className='text-2xl font-bold'>Piano accompaniment patterns</h1>
            <div className='flex gap-8 m-8'>
                {Object.values(pianoAccompanimentPatterns).map(pattern => (
                    <PianoAccompanimentPatternCard
                        key={pattern.id}
                        pattern={pattern}
                        lang={lang}
                    />
                ))}
            </div>
        </div>
    );
};

export default Page;
