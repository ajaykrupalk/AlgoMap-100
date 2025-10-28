/**
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 * Approach:
 * 1. Initialize a set and iterate through all the elements in the row
 * 2. If elements are already present in the set return false, else add to the set
 * 3. Initialize a set and iterate through all the elements in the column
 * 4. If elements are already present in the set return false, else add to the set
 * 5. Initialize an array of all the starting row, column of the sub-boxes
 * 6. Iterate from startRow to startRow+3 and startCol to startCol+3
 * 7. Initialize a set and iterate through all the elements in the sub-boxes
 * 8. If elements are already present in the set return false, else add to the set
 * 9. Finally return true if none of the conditions failed
 */

var isValidSudoku = function (board) {
    for(const r = 0; r < 9; r++){
        const seen = new Set()
        for(const c = 0; c < 9; c++){
            const item = board[r][c]
            if(item !== '.' && seen.has(item)){
                return false
            }
            seen.add(item)
        }
    }

    for(const r = 0; r < 9; r++){
        const seen = new Set()
        for(const c = 0; c < 9; c++){
            const item = board[c][r]
            if(item !== '.' && seen.has(item)){
                return false
            }
            seen.add(item)
        }
    }

    const starts = [
        [0,0],[0,3],[0,6],
        [3,0],[3,3],[3,6],
        [6,0],[6,3],[6,6]
    ]

    for(const [startRow,startCol] of starts){
        const seen = new Set()
        for(const r = startRow; r < startRow+3; i++){
            for(const c = startCol; c < startCol+3; j++){
                const item = board[r][c]
                if(item !== '.' && seen.has(item)){
                    return false
                }
                seen.add(item)
            }
        }
    }

    return true
}