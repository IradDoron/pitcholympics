type Props = {
	text: string | undefined;
};

const TextInfo = ({ text }: Props) => {
	if (!text) return null;
	return (
		<div className='text-info'>
			<p>{text}</p>
		</div>
	);
};

export default TextInfo;
