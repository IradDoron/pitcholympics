export const getMatrixWithZeros = (rows: number, cols: number) => {
    const rowAmount = Array(rows).fill(0)
    const matrix: number[][] = []
    rowAmount.forEach((_, i) => {
        const newRow = new Array(cols).fill(0)
        matrix.push(newRow)
    })
    console.log(matrix)
    return matrix
}
