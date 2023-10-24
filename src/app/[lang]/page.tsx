import HomePage from '@/components/shared/HomePage';
import Link from '@/components/core/link';

import { LangParam } from '@/types';
import { getDictionaryServer } from '@/utils/getDictionaryServer';
import PageTitle from '@shared/PageTitle';
import LevelLink from '@/components/core/level-link/levelLink';

const Home = async ({ params: { lang } }: LangParam) => {
	const dict = await getDictionaryServer(lang);
	const { page } = dict.app;

	return (
		<>
			<PageTitle title={page.title} />
			<HomePage title={page.title} />
			<Link label={'Taim'} url={`http://www.google.com`} shape="circle" />
			<LevelLink state={'current'} url={`http://www.google.com`} level={1}/>
		</>
	);
};

export default Home;
