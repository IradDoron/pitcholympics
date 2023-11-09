import type { Collaborator } from '@/types';
import NextImage from 'next/image';

type Props = {
	image: Collaborator['image'];
	alt: Collaborator['firstName'];
};

const Image = ({ image, alt }: Props) => {
	return (
		<div className='flex justify-center border-[8px] border-light-primary-main dark:border-dark-primary-main rounded-[50%]'>
			<NextImage src={image} alt={alt} width={200} height={200} />
		</div>
	);
};

export default Image;
