import type { Collaborator } from '@/types';
import NextImage from 'next/image';
import { CardComponentsColor } from './types';

type Props = {
	image: Collaborator['image'];
	alt: Collaborator['firstName'];
	color: CardComponentsColor;
};

const getStyles = (color: CardComponentsColor) => {
	const styles = `flex justify-center border-[8px] rounded-[50%] border-light-${color}-main dark:border-dark-${color}-main`;
	return styles;
};

const Image = ({ image, alt, color }: Props) => {
	return (
		<div className={` ${getStyles(color)}`}>
			<NextImage src={image} alt={alt} width={200} height={200} />
		</div>
	);
};

export default Image;
