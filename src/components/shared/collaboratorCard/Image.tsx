import type { Collaborator } from '@/types';
import NextImage from 'next/image';

type Props = {
	image: Collaborator['image'];
    alt: Collaborator['firstName'];
};

const Image = ({ image, alt }: Props) => {
	return (
		<div className='flex justify-center'>
			<NextImage src={image} alt={alt} width={200} height={200} />
		</div>
	);
};

export default Image;
