import TextInfo from '@/components/shared/collaboratorCard/TextInfo';
import { Collaborator, CollaboratorRoles } from '@/types';
import Card from '@/components/core/card';
import Image from './Image';
import Links from './Links';
import { CardComponentsColor } from './types';

type Props = {
	collaborator: Collaborator;
	color: CardComponentsColor;
};

const CollaboratorCard = ({ collaborator, color }: Props) => {
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
		<Card color={color} shadow='large'>
			<div className='flex flex-row gap-6'>
				<Image image={image} alt={firstName} color={color} />
				<div className='flex flex-col gap-4'>
					<section className='flex flex-col gap-4'>
						<TextInfo text={fullName} color={color} />
						<TextInfo text={rolesString} color={color} />
						<TextInfo text={city} color={color} />
						<TextInfo text={lookingFor} color={color} />
					</section>
					<Links github={github} linkedin={linkedin} portfolio={portfolio} />
				</div>
			</div>
		</Card>
	);
};

export default CollaboratorCard;
