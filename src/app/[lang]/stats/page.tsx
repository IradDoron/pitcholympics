import Card from "@/components/core/card";
import { LangParam } from '@/types';
import { getDictionaryServer } from '@/utils/getDictionaryServer';
import users from '@/mockData/users';


const Page = async ({ params: { lang } }: LangParam) => {
	const user = users[0];
	const dict = await getDictionaryServer(lang);
	const { page } = dict.app.stats;

	return (
		<div className="container m-2 p-5">
			<Card title={user.resources.coins.toString()} subTitle={page.resources.coins} color="primary" />
			<Card title={user.resources.gems.toString()} subTitle={page.resources.gems} color="secondary" />
		</div>
	);
};

export default Page;
