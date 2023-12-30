type Props = {
    number: number;
    status: 'passed' | 'current' | 'default';
};

const getStepColor = (status: Props['status']) => {
    switch (status) {
        case 'passed':
            return 'bg-light-primary-main dark:bg-dark-primary-main text-light-primary-contrastText dark:text-dark-primary-contrastText';
        case 'current':
            return 'bg-light-secondary-main dark:bg-dark-secondary-main text-light-secondary-contrastText dark:text-dark-secondary-contrastText';
        case 'default':
            return 'bg-grey-900 dark:bg-grey-500 text-grey-100 dark:text-grey-B00';
        default:
            return '';
    }
};

export const Step = ({ number, status }: Props) => {
    const colors = getStepColor(status);
    return (
        <div
            className={`text-lg flex justify-center items-center rounded-[50%] w-[52px] h-[52px] ${colors}`}>
            <p>{number}</p>
        </div>
    );
};
