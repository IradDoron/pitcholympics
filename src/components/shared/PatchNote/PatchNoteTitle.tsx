import { getDictionaryClient } from '@/utils/getDictionaryClient';
import { Locale } from '@/i18n.config';

type Props = {
    lang: Locale;
};

const PatchNoteTitle = ({ lang }: Props) => {
    const dict = getDictionaryClient(lang);
    const { title } = dict.app['patchNote'].page;

    return (
        <div className='h-full flex flex-col justify-center'>
            <div className='flex flex-col items-center justify-center rounded-lg m-8 bg-light-background-onDefault text-large h-16'>
                <span className='text-light-background-default'>{title}</span>
            </div>
        </div>
    );
};

export default PatchNoteTitle;
