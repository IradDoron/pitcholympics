import Link from '@/components/core/link';
import { LangParam } from '@/types';
import { getDictionaryServer } from '@/utils/getDictionaryServer';
import PageTitle from '@shared/PageTitle';

const Home = async ({ params: { lang } }: LangParam) => {
	const dict = await getDictionaryServer(lang);
	const { page } = dict.app;

	return (
		<>
			<PageTitle title={page.title} />
		
			<Link label={'Taim'} url={'www.google.com'} shape="circle" />
			
			
		</>
	);
};

export default Home;
