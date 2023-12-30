import { Locale } from '@/i18n.config';
import { getDictionaryClient } from '@utils';

type Props = {
    lang: Locale;
};

const PatchNoteTitle = ({ lang }: Props) => {
    const dict = getDictionaryClient(lang);
    const { title } = dict.app['patchNote'].page;

    return (
        <div className='flex flex-col justify-start'>
            <div className='flex items-center justify-center rounded-lg m-28 bg-light-background-onDefault text-large h-16'>
                <span className='text-light-background-default'>{title}</span>
            </div>
        </div>
    );
};

export default PatchNoteTitle;
