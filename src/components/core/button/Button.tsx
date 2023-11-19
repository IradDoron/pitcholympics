type BtnSize = 'small' | 'medium' | 'large';

type Props = {
    label: string;
    onClick: () => void;
    size?: BtnSize;
    state?: 'default' | 'disabled';
};

const Button = ({
    label,
    onClick,
    size = 'medium',
    state = 'default',
}: Props) => {
    const getSize = (size: BtnSize) => {
        switch (size) {
            case 'small':
                return 'px-2 py-1 text-xs';
            case 'medium':
                return 'px-4 py-2 text-base';
            case 'large':
                return 'px-6 py-3 text-xl';
            default:
                return 'px-6 py-3 text-xl';
        }
    };

    const getColor = (state: 'default' | 'disabled') => {
        switch (state) {
            case 'default':
                return 'bg-light-primary-main dark:bg-dark-primary-main text-light-primary-contrastText dark:text-dark-primary-contrastText';
            case 'disabled':
                return 'bg-grey-A00 dark:bg-grey-300 text-light-background-onDefault dark:text-dark-background-onDefault cursor-not-allowed';
            default:
                return 'bg-light-primary-main dark:bg-dark-primary-main text-light-primary-contrastText dark:text-dark-primary-contrastText';
        }
    };

    const buttonSize = getSize(size);
    const buttonColor = getColor(state);
    return (
        <button
            onClick={onClick}
            className={`bg-light-primary-main dark:bg-dark-primary-main text-light-primary-contrastText dark:text-dark-primary-contrastText rounded-[12px] ${buttonSize} ${buttonColor}`}>
            {label}
        </button>
    );
};

export default Button;
