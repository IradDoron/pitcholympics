import type { Collaborator } from '@/types';
import NextImage from 'next/image';
import { CardComponentsColor } from './types';

type Props = {
	image: Collaborator['image'];
	alt: Collaborator['firstName'];
	color: CardComponentsColor;
};

const Image = ({ image, alt, color }: Props) => {
	const styles = {
		primary:
			'flex justify-center border-[8px] rounded-[50%] border-light-primary-main dark:border-dark-primary-main',
		secondary:
			'flex justify-center border-[8px] rounded-[50%] border-light-secondary-main dark:border-dark-secondary-main',
		tertiary:
			'flex justify-center border-[8px] rounded-[50%] border-light-tertiary-main dark:border-dark-tertiary-main',
	};

	return (
		<div className={styles[color]}>
			<NextImage src={image} alt={alt} width={200} height={200} />
		</div>
	);
};

export default Image;
