type CardShadow = 'none' | 'medium' | 'large';
type CardColor = 'primary' | 'secondary' | 'tertiary';
type CardBorder = boolean;

type Props = {
	color?: CardColor;
	shadow?: CardShadow;
	border?: CardBorder;
	children: React.ReactNode;
};

const getShadow = (shadow: CardShadow) => {
	switch (shadow) {
		case 'none':
			return '';
		case 'medium':
			return 'shadow-medium-light dark:shadow-medium-dark';
		case 'large':
			return 'shadow-large-light dark:shadow-large-dark';
		default:
			return '';
	}
};

const getBackground = (color: CardColor) => {
	switch (color) {
		case 'primary':
			return 'bg-light-surface-primary dark:bg-dark-surface-primary';
		case 'secondary':
			return 'bg-light-surface-secondary dark:bg-dark-surface-secondary';
		case 'tertiary':
			return 'bg-light-surface-tertiary dark:bg-dark-surface-tertiary';
		default:
			return '';
	}
};

const getBorder = (border: CardBorder) => {
	switch (border) {
		case true:
			return 'border-[3px] border-light-primary-light dark:border-dark-primary-main';
		case false:
			return '';
		default:
			return '';
	}
};

const Card = ({
	color = 'primary',
	shadow = 'none',
	border = false,
	children,
}: Props) => {
	const shadowClass = getShadow(shadow);
	const backgroundClass = getBackground(color);
	const borderClass = getBorder(border);
	return (
		<div
			className={`p-4 rounded-lg flex w-fit items-center justify-center gap-2 ${shadowClass} ${borderClass} ${backgroundClass}`}
		>
			{children}
		</div>
	);
};

export default Card;
