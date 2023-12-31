import { colorsTemplateMatrix } from '@constants';
import {
    CellInfo,
    LibraryContentCourse,
    MatrixWithId,
    NoteStatus,
} from '@types';

export const getXpForLevel = (level: number): number => {
    const x = 0.07;
    const y = 2;
    // formula: ( level / x ) ^ y
    return Math.floor(Math.pow(level / x, y));
};

export const compareArrays = (
    arr1: any[],
    arr2: any[],
    cmpFunc = (i1: any, i2: any) => i1 === i2,
): boolean => {
    if (arr1.length !== arr2.length) return false;
    return arr1.every((item, index) => cmpFunc(item, arr2[index]));
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

export const getCurrentTab = (pathname: string) => {
    const tabs = pathname.split('/');
    return tabs[tabs.length - 1];
};

export function splitCamelCaseToString(s: string): string {
    return s
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        .replace(/\b\w/g, l => l.toUpperCase()); // Convert the game name to a readable format
}

export function parseTable(values: CellInfo[]): MatrixWithId {
    return {
        id: crypto.randomUUID(),
        data: Array.from({ length: 8 }, (_, rowIndex) => {
            return Array.from({ length: 4 }, (_, colIndex) => {
                const cell = values.find(
                    cell => cell.row === rowIndex && cell.col === colIndex,
                );
                return {
                    note: colorsTemplateMatrix[rowIndex][colIndex].note,
                    isActive:
                        cell?.value === NoteStatus.ACTIVE ||
                        cell?.value === NoteStatus.TIED,
                    isTied: cell?.value === NoteStatus.TIED,
                };
            });
        }),
    };
}

export * from './connectToDB';
export * from './divideItemsByLightAndDark';
export * from './gameLogic';
export * from './getDictionaryClient';
export * from './getDictionaryServer';
export * from './getHtmlDirection';
export * from './redirectedPathName';
export * from './reduceClasses';
