export const getXpForLevel = (level: number): number => {
    const x = 0.07;
    const y = 2;
    // formula: ( level / x ) ^ y
    return Math.floor(Math.pow(level / x, y));
};

export const isTwoArraysEqual = (arr1: any[], arr2: any[]): boolean => {
    if (arr1.length !== arr2.length) return false;
    return arr1.every((item, index) => item === arr2[index]);
};
