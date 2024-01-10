'use client';

import { Card } from '@core';
import { css } from '@emotion/css';
import { Collaborator, CollaboratorRoles } from '@types';
import { Image } from './Image';
import { Links } from './Links';
import { TextInfo } from './TextInfo';
import { CardComponentsColor } from './types';

type Props = {
    collaborator: Collaborator;
    color: CardComponentsColor;
    cardIndex: number;
};

export const CollaboratorCard = ({ collaborator, color, cardIndex }: Props) => {
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
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
        return titleCase;
    };

    const getRolesString = (roles: CollaboratorRoles[]) => {
        const rolesString = roles
            .map(role => getKebabCaseToTitleCase(role))
            .join(', ');

        return rolesString;
    };

    const rolesString = getRolesString(roles);

    const flexDirections = {
        even: 'flex-row',
        odd: 'flex-row-reverse',
    };

    const flexDirection = flexDirections[cardIndex % 2 === 0 ? 'even' : 'odd'];

    return (
        <Card
            styles={css`
                padding: 16px;
            `}>
            <div className={`flex flex-col sm:flex-row gap-6 ${flexDirection}`}>
                <Image image={image} alt={firstName} color={color} />
                <div className='flex flex-col gap-4'>
                    <section className='flex flex-col gap-4'>
                        <TextInfo text={fullName} color={color} />
                        <TextInfo text={rolesString} color={color} />
                        <TextInfo text={city} color={color} />
                        <TextInfo text={lookingFor} color={color} />
                    </section>
                    <Links
                        github={github}
                        linkedin={linkedin}
                        portfolio={portfolio}
                        color={color}
                    />
                </div>
            </div>
        </Card>
    );
};
