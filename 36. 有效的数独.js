/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let rows = new Array(9).fill(1).map(() => ({}))
    let cows = new Array(9).fill(1).map(() => ({}))
    let boxes = new Array(9).fill(1).map(() => ({}))

    for(let i = 0; i < 9; i ++) {
        for (let j = 0; j < 9; j ++) {
            let num = board[i][j]
            let box_index = parseInt(i / 3) * 3 + parseInt(j / 3)
            if (num !== '.') {
                if (rows[i][num] || cows[j][num] || boxes[box_index][num] || num > 9 || num < 0) {
                    return false
                }
                rows[i][num] = 1
                cows[j][num] = 1
                boxes[box_index][num] = 1
            }
        }
    }
    return true
};

let board = [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
  ]
console.log(isValidSudoku(board))