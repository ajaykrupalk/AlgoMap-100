/**
 * Time Complexity O(n*m)
 * Space Complexity O(1)
 * Approach:
 * Initialize two variables, m and n for row and col length
 * Maintain two pointers to iterate through the array
 * Initialize direction to 'RIGHT'
 * Maintain boundaries, LEFT_WALL(-1), RIGHT_WALL(n), DOWN_WALL(m), UP_WALL(0)
 * While length of output array is not equal to m*n, iterate through the array
 * For RIGHT: While j is less than RIGHT_WALL, append to output array and increement j. 
 * Then decreement j, increement i, decreement RIGHT_WALL by 1, set direction to 'DOWN'
 */
var spiralMatrix = function (matrix) {
  const m = matrix.length,
    n = matrix[0].length,
    output = [];
  let i = 0,
    j = 0;
  let UP_WALL = 0,
    RIGHT_WALL = n,
    DOWN_WALL = m,
    LEFT_WALL = -1;
  let direction = 'RIGHT';
  while (output.length < m * n) {
    if (direction === 'RIGHT') {
      while (j < RIGHT_WALL) {
        output.push(matrix[i][j]);
        j++;
      }
      i++;
      j--;
      RIGHT_WALL--;
      direction = 'DOWN'
    } else if(direction === 'DOWN') {
        while(i < DOWN_WALL){
            output.push(matrix[i][j])
            i++
        }
        i--;
        j--;
        DOWN_WALL--;
        direction = 'LEFT'
    } else if(direction === 'LEFT') {
        while(j > LEFT_WALL) {
            output.push(matrix[i][j])
            j--;
        }
        i--;
        j++;
        LEFT_WALL++;
        direction = 'UP'
    } else {
        while(i > UP_WALL){
            output.push(matrix[i][j])
            i--;
        }
        i++;
        j++;
        UP_WALL++;
        direction='RIGHT'
    }
  }

  console.log(output) 
};

spiralMatrix([[1,2,3],[4,5,6],[7,8,9]])
spiralMatrix([[1,2,3,4],[5,6,7,8],[9,10,11,12]])
