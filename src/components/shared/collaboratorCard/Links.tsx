import { Collaborator } from '@/types';
import Link from 'next/link';
import GithubLogo from '@/components/icons/githubLogo';

type Props = {
	github: Collaborator['github'];
	linkedin: Collaborator['linkedin'];
	portfolio: Collaborator['portfolio'];
};

const Links = ({ github, linkedin, portfolio }: Props) => {
	return (
		<div className='flex flex-row gap-2'>
			{github && <GithubLogo color='004545' />}
			{linkedin && (
				<Link href={linkedin} target='_blank' rel='noopener noreferrer'>
					Linkedin
				</Link>
			)}
			{portfolio && (
				<Link href={portfolio} target='_blank' rel='noopener noreferrer'>
					Portfolio
				</Link>
			)}
		</div>
	);
};

export default Links;
