import { colorsTemplateMatrix } from '@constants';
import { MatrixWithId } from '@types';

export function mirrorMatrix(matrix: MatrixWithId) {
    if (!matrix) return;
    const refMatrix = colorsTemplateMatrix;
    const copyMatrix: MatrixWithId = { id: matrix.id, data: [] };
    const rows = refMatrix.length;
    const cols = refMatrix[0].length;
    for (let i = 0; i < rows; i++) {
        copyMatrix.data.push([]);
        for (let j = 0; j < cols; j++) {
            if (!matrix.data[rows - 1 - i][j].isActive)
                copyMatrix.data[i].push({
                    note: refMatrix[i][j].note,
                    isActive: false,
                    isTied: false,
                });
            else copyMatrix.data[i].push(refMatrix[i][j]);
        }
    }
    return copyMatrix;
}

export function flipMatrix(matrix: MatrixWithId) {
    if (!matrix) return;
    const copyMatrix: MatrixWithId = { id: matrix.id, data: [] };
    const rows = matrix.data.length;
    const cols = matrix.data[0].length;
    for (let i = 0; i < rows; i++) {
        copyMatrix.data.push([]);
        for (let j = 0; j < cols; j++) {
            copyMatrix.data[i].push(matrix.data[i][cols - 1 - j]);
        }
    }
    return copyMatrix;
}
