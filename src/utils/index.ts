export const getXpForLevel = (level: number): number => {
	const x = 0.07;
	const y = 2;
	// formula: ( level / x ) ^ y
	return Math.floor(Math.pow(level / x, y));
};

export const getTimeZone = (): string => {
	return /\((.*)\)/.exec(new Date().toString())![1];
};

