import TextInfo from '@/components/shared/collaboratorCard/TextInfo';
import { Collaborator, CollaboratorRoles } from '@/types';
import Card from '@/components/core/card';
import Image from './Image';
import Links from './Links';

type Props = {
	collaborator: Collaborator;
};

const CollaboratorCard = ({ collaborator }: Props) => {
	const {
		firstName,
		lastName,
		roles,
		city,
		image,
		lookingFor,
		github,
		linkedin,
		portfolio,
	} = collaborator;

	const fullName = `${firstName} ${lastName}`;

	const getKebabCaseToTitleCase = (kebabCase: string) => {
		const words = kebabCase.split('-');
		const titleCase = words
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(' ');
		return titleCase;
	};

	const getRolesString = (roles: CollaboratorRoles[]) => {
		const rolesString = roles
			.map((role) => getKebabCaseToTitleCase(role))
			.join(', ');

		return rolesString;
	};

	const rolesString = getRolesString(roles);

	return (
		<Card color='primary' shadow='large'>
			<Image image={image} alt={firstName} />
			<div className='flex flex-col gap-4'>
				<section className='flex flex-col gap-4'>
					<TextInfo text={fullName} />
					<TextInfo text={rolesString} />
					<TextInfo text={city} />
					<TextInfo text={lookingFor} />
				</section>
				<Links github={github} linkedin={linkedin} portfolio={portfolio} />
			</div>
		</Card>
	);
};

export default CollaboratorCard;
