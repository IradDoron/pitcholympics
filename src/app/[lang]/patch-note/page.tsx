import PatchNoteTitle from '@/components/shared/PatchNote/PatchNoteTitle';
import { Locale } from '@/i18n.config';

type Props = {
    lang: Locale;
};
const page = async ({ params }: { params: Props }) => {
    const lang = params;
    return <PatchNoteTitle lang={lang} />;
};

export default page;
