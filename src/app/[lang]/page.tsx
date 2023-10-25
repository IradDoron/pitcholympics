import HomePage from '@/components/shared/HomePage';
import Link from '@/components/core/link';
import { LangParam } from '@/types';
import { getDictionaryServer } from '@/utils/getDictionaryServer';
import PageTitle from '@shared/PageTitle';
import LevelLink from '@/components/core/levelLink/LevelLink';
import LevelsLinksContainer from '@/components/core/levelsLinksContainer';
import NotesCircle from '@/components/core/notesCircle/NotesCircle';
import ArrowLink from '@/components/shared/arrowLink';

const Home = async ({ params: { lang } }: LangParam) => {
	const dict = await getDictionaryServer(lang);
	const { page } = dict.app;

	return (
		<>
			<PageTitle title={page.title} />
			<HomePage title={page.title} lang={lang} />
			<ArrowLink url={'http://google.com'}/>
		</>
	);
};

export default Home;
