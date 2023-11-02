type Props = {
	children: React.ReactNode;
};

const StageLevelsContainer = ({ children }: Props) => {
	return (
		<div className='flex justify-center items-center flex-wrap max-w-[332px] bg-light-surface-primary dark:bg-dark-surface-primary border-[3px] rounded-xl border-blue-400 dark:border-cyan-300 p-[16px] gap-[16px] shadow-large-light dark:shadow-large-dark'>
			{children}
		</div>
	);
};

export default StageLevelsContainer;
