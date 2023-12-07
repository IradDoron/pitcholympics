import { LibraryContentCourse } from '@/types/libraryPageTypes';

export * from './gameLogic';

export const getXpForLevel = (level: number): number => {
    const x = 0.07;
    const y = 2;
    // formula: ( level / x ) ^ y
    return Math.floor(Math.pow(level / x, y));
};

export const compareArrays = (arr1: any[], arr2: any[]): boolean => {
    if (arr1.length !== arr2.length) return false;
    return arr1.every((item, index) => item === arr2[index]);
};

export const shuffleArray = (array: any[]) => {
    let currentIndex = array.length,
        temporaryValue,
        randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex--);

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};

export const convertKebabCaseToCamelCase = (str: string) => {
    return str.replace(/-([a-z])/g, function (g) {
        return g[1].toUpperCase();
    });
};

export const mapToObject = (map: Map<any, any>) => {
    const obj = Object.create(null);
    for (const [k, v] of map) {
        obj[k] = v;
    }
    return obj;
};

export const getTimeZone = (): string => {
    return /\((.*)\)/.exec(new Date().toString())![1];
};

export const getRandomItemFromArray = (arr: any) => {
    return arr[Math.floor(Math.random() * arr.length)];
};


export const countLessonsInCourse = (course: LibraryContentCourse) => {
    let count = 0;

    course.tracks.forEach(track => {
        track.sections.forEach(section => {
            count += section.lessons.length;
        });
    });

    return count;
};