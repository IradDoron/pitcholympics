import { Matrix } from '@types';

export const ICON_SIZES = {
    small: 'w-6 h-6',
    medium: 'w-8 h-8',
    large: 'w-12 h-12',
    extraLarge: 'w-24 h-24',
};

export const ICON_COLORS = {
    primary: 'fill-light-primary-main dark:fill-dark-primary-main',
    secondary: 'fill-light-secondary-main dark:fill-dark-secondary-main',
    tertiary: 'fill-light-tertiary-main dark:fill-dark-tertiary-main',
};

function setColorsMatrix(): Matrix {
    const rows = 8;
    const columns = 4;
    const letters = ['C', 'B', 'A', 'G', 'F', 'E', 'D', 'C'];
    let colorsMatrix: Matrix = [];

    for (let i = 0; i < rows; i++) {
        //colorsMatrix.push(
        colorsMatrix.push(
            Array(columns).fill({
                note: letters[i],
                isActive: true,
                isTied: false,
            }),
        );
    }

    return colorsMatrix;
}

export const colorsTemplateMatrix = setColorsMatrix();
