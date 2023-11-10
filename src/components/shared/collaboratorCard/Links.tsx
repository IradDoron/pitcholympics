import { Collaborator, MainColorCategories } from '@/types';
import Link from 'next/link';
import GithubLogo from '@/components/icons/githubLogo';
import LinkedinLogo from '@/components/icons/linkedinLogo';
import PortfolioLogo from '@/components/icons/portfolioLogo';

type Props = {
	github: Collaborator['github'];
	linkedin: Collaborator['linkedin'];
	portfolio: Collaborator['portfolio'];
	color: MainColorCategories;
};

const Links = ({ github, linkedin, portfolio, color }: Props) => {
	return (
		<div className='flex flex-row gap-4 items-center '>
			{github && (
				<Link href={github} target='_blank' rel='noopener noreferrer'>
					<GithubLogo color={color} />
				</Link>
			)}
			{linkedin && (
				<Link href={linkedin} target='_blank' rel='noopener noreferrer'>
					<LinkedinLogo color={color} />
				</Link>
			)}
			{portfolio && (
				<Link href={portfolio} target='_blank' rel='noopener noreferrer'>
					<PortfolioLogo color={color} />
				</Link>
			)}
		</div>
	);
};

export default Links;
