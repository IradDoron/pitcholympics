import { LangParam } from '@/types';
import { getDictionaryServer } from '@/utils/getDictionaryServer';

const Home = async ({ params: { lang } }: LangParam) => {
	const dict = await getDictionaryServer(lang);
	const { page } = dict.app;
	return (
		<>
			<h1>{page.title}</h1>
		</>
	);
};

export default Home;
