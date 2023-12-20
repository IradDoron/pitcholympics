import PatchNoteCard from './_components/PatchNoteCard';
import PatchNoteTitle from './_components/PatchNoteTitle';
import { Locale } from '@/i18n.config';

type Props = {
    lang: Locale;
};
const page = async ({ params }: { params: Props }) => {
    const { lang } = params;
    return (
        <>
            <PatchNoteTitle lang={lang} />
            <PatchNoteCard lang={lang} />
        </>
    );
};

export default page;
