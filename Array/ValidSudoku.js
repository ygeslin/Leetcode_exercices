// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.


// Example 1:


// Input: board =
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: true
// Example 2:

// Input: board =
// [["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.


// Constraints:

// board.length == 9
// board[i].length == 9
// board[i][j] is a digit 1-9 or '.'.
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
        let set = new Set();

    for(let r = 0; r < board.length; r++){
        for(let c = 0; c < board[r].length; c++){
            let val = board[r][c];

            if(val === '.')
                continue;

            //basically, formula is 3 * row + col --> to turn 2d array into 1d array
            //using Math.floor(row/3) + Math.floor(col/3) --> so we can find row and col of our sub box
            let boxNum = 3 * Math.floor(r/3) + Math.floor(c/3);

            let inRow = `row: ${r}, value: ${val}`;
            let inCol = `col: ${c}, value: ${val}`;
            let inSubBox = `subBox: ${boxNum}, value: ${val}`;

            if(set.has(inRow) || set.has(inCol) || set.has(inSubBox))
                return false;

            set.add(inRow);
            set.add(inCol);
            set.add(inSubBox);
        }
    }
    return true;
};

var isValidSudoku = function (board) {
    const rows = [];
    const cols = [];
    const boxes = [];

    for (let i = 0; i < 9; i++) {
      rows.push(new Set());
      cols.push(new Set());
      boxes.push(new Set());
    }

    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        const value = board[r][c];
        if (value === ".") continue;
        const b = Math.floor(r / 3) * 3 + Math.floor(c / 3);

        if (rows[r].has(value)) return false;
        if (cols[c].has(value)) return false;
        if (boxes[b].has(value)) return false;

        rows[r].add(value);
        cols[c].add(value);
        boxes[b].add(value);
      }
    }
    return true;
  };