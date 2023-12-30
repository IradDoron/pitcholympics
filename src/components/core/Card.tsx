import { reduceClasses } from '@utils';

type CardShadow = 'none' | 'medium' | 'large';
type CardColor = 'primary' | 'secondary' | 'tertiary';
type CardBorder = boolean;
type CardWidth = 'fit' | 'full' | number;

type Props = {
    color?: CardColor;
    shadow?: CardShadow;
    border?: CardBorder;
    width?: CardWidth;
    isWrap?: boolean;
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    // eslint-disable-next-line no-unused-vars
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
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

const getWrap = (isWrap: boolean) => {
    switch (isWrap) {
        case true:
            return 'flex-wrap';
        case false:
            return '';
        default:
            return '';
    }
};

const getWidth = (width: CardWidth) => {
    switch (width) {
        case 'fit':
            return 'w-fit';
        case 'full':
            return 'w-full';
        default:
            return `w-[${width}]px`;
    }
};

const getCustomClass = (customClass: string) => {
    return customClass;
};

export const Card = ({
    color = 'primary',
    shadow = 'none',
    border = false,
    width = 'fit',
    isWrap = false,
    children,
    className = '',
    style = {},
    onClick,
}: Props) => {
    const shadowClass = getShadow(shadow);
    const backgroundClass = getBackground(color);
    const borderClass = getBorder(border);
    const wrapClass = getWrap(isWrap);
    const widthClass = getWidth(width);
    const customClass = getCustomClass(className);
    const defaultClasses = 'rounded-lg flex items-center justify-center';

    const classesString = `${shadowClass} ${backgroundClass} ${borderClass} ${wrapClass} ${widthClass} ${defaultClasses} ${customClass}`;

    const reducedClasses = reduceClasses(classesString);

    return (
        <div className={reducedClasses} style={style} onClick={onClick}>
            {children}
        </div>
    );
};
