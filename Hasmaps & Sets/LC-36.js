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