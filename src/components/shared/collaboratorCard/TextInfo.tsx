import React from 'react';

type Props = {
	text: string | undefined;
	color: 'primary' | 'secondary' | 'tertiary';
};

const getTextColor = (color: 'primary' | 'secondary' | 'tertiary') => {
	const firstLetter = color.charAt(0).toUpperCase();
	const rest = color.slice(1);
	const textColor = `text-light-surface-on${firstLetter}${rest} dark:text-dark-surface-on${firstLetter}${rest}`;
	console.log(textColor);
	return textColor;
};

const TextInfo = ({ text, color }: Props) => {
	if (!text) return null;
	const textColor = getTextColor(color);
	return <p className={`${textColor}`}>{text}</p>;
};

export default TextInfo;
