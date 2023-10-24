import HomePage from '@/components/shared/HomePage';
import Link from '@/components/core/link';
import { LangParam } from '@/types';
import { getDictionaryServer } from '@/utils/getDictionaryServer';
import PageTitle from '@shared/PageTitle';
import LevelLink from '@/components/core/level-link/levelLink';
import LevelsLinksContainer from '@/components/core/levels-links-container';
import NotesCircle from '@/components/core/notes-circle/notesCircle';

const Home = async ({ params: { lang } }: LangParam) => {
	const dict = await getDictionaryServer(lang);
	const { page } = dict.app;

	return (
		<>
			<PageTitle title={page.title} />
			<HomePage title={page.title} lang={lang} />

			{/* <Link label={'Taim'} url={`http://www.google.com`} shape="circle" />
			<LevelsLinksContainer>
			<LevelLink state={'passed'} url={`http://www.google.com`} level={1}/>
			<LevelLink state={'passed'} url={`http://www.google.com`} level={2}/>
			<LevelLink state={'passed'} url={`http://www.google.com`} level={3}/>
			<LevelLink state={'passed'} url={`http://www.google.com`} level={4}/>
			<LevelLink state={'passed'} url={`http://www.google.com`} level={5}/>
			<LevelLink state={'passed'} url={`http://www.google.com`} level={6}/>
			<LevelLink state={'passed'} url={`http://www.google.com`} level={7}/>
			<LevelLink state={'failed'} url={`http://www.google.com`} level={8}/>
			<LevelLink state={'current'} url={`http://www.google.com`} level={9}/>
			<LevelLink state={'current'} url={`http://www.google.com`} level={10}/>
			</LevelsLinksContainer> */}
			<NotesCircle state={'notPlayed'} />
		</>
	);
};

export default Home;
