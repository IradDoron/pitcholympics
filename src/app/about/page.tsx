import { LangParam } from '@/types';
import { getDictionaryServer } from '@/utils/getDictionaryServer';

const Page = async ({ params: { lang } }: LangParam) => {
	const dict = await getDictionaryServer(lang);
	const { page } = dict.app.about;
	return (
		<>
			<h1>{page.title}</h1>
		</>
	);
};

export default Page;
