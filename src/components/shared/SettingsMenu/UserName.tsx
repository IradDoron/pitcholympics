type Props = {
    label: string;
};

export const UserName = ({ label }: Props) => {
    return (
        <p className='text-lg text-light-surface-onPrimary dark:text-dark-surface-onPrimary'>
            {label}
        </p>
    );
};
