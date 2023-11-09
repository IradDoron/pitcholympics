import { LangParam } from '@/types';
import CollaboratorCard from '@/components/shared/collaboratorCard';
import collaborators from '@/data/collaborators';

const Page = async ({ params: { lang } }: LangParam) => {
	return (
		<div className='flex flex-col w-full items-center'>
			<div
				style={{
					marginTop: '140px',
				}}
			></div>
			<div>
				{collaborators.map((collaborator) => (
					<CollaboratorCard key={collaborator.id} collaborator={collaborator} />
				))}
			</div>
		</div>
	);
};

export default Page;
