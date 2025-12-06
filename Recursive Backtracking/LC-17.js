/**
 * Time Complexity: O(3^n * 4^m) where n is number of digits with 3 letters and m is number of digits with 4 letters
 * Space Complexity: O(3^n * 4^m) for storing all combinations
 * Approach:
 * 1. Handle edge case: if `digits` is empty, return an empty array.
 * 2. Create a `letterMap` object mapping each digit (2-9) to its corresponding letters on a phone keypad.
 * 3. Initialize an empty result array `ans` to store all letter combinations.
 * 4. Define a recursive backtracking function `backtrack(index, path)` that builds combinations digit by digit.
 * 5. Base case: when `index === digits.length`, all digits have been processed; join the current `path` into a string and add it to `ans`.
 * 6. Recursive case: for the current digit at `digits[index]`, iterate through all corresponding letters from `letterMap`.
 * 7. For each letter, add it to `path`, recurse to the next digit `backtrack(index + 1, path)`, then remove the letter (backtrack).
 * 8. Call `backtrack(0, [])` starting from index 0 and return all combinations in `ans`.
 */
var letterCombinations = function (digits){
    if(!digits) return []

    const letterMap = {
        '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno',
        '7': 'pqrs', '8': 'tuv', '9': 'wxyz'
    }

    const ans = []
    function backtrack(index, path){
        if(index === digits.length){
            ans.push(path.join(""))
            return
        }

        const letters = letterMap[digits[index]]
        for(const letter of letters){
            path.push(letter)
            backtrack(index+1,path)
            path.pop()
        }
    }

    backtrack(0,[])
    return ans
}