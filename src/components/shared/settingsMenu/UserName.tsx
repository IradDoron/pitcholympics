type Props = {
	label: string;
};

const UserName = ({ label }: Props) => {
	return (
		<p className='text-lg text-light-surface-onPrimary dark:text-dark-surface-onPrimary'>
			{label}
		</p>
	);
};

export default UserName;
