type Props = {
	label: string;
};

const UserName = ({ label }: Props) => {
	return <p className='text-lg'>{label}</p>;
};

export default UserName;
