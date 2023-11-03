import Card from "@/components/core/card";
import StatsSection from "@/components/shared/stats/statsSection";
import { LangParam } from '@/types';

const Page = async ({ params: { lang } }: LangParam) => {

	return (
		<div className="p-4">
			<div className="h-14" id="filler" /> {/* Filler for the sticky header */}
			<div className="flex flex-col gap-0">
				<StatsSection type="resources" lang={lang} color="primary" />
				<StatsSection type="gamesStats" lang={lang} color="primary" />
			</div>
		</div>
	);
};

export default Page;