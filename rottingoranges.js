//Objective is, given a matrix of 0's (empty), 1's (fresh), and 2's (rotten) oranges,
//and fore ach minute each fresh orange becomes rotten if it is adjacent to a 2, find
//the number of minutes it takes to make all oranges rotten.

let grid = 
[[2,1,1],
 [1,1,0],
 [0,1,1]]


//O(n) solution, where n is the size of the grid, that uses a BFS to keep track of adjacent oranges

let queue = []
let fresh = 0
let directions = [[1,0], [-1,0], [0,1], [0,-1]]
let minutes = 0

for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
        if (grid[i][j] == 1) {
            fresh++
        } else if (grid[i][j] == 2) {
            queue.push([i,j])
        }
    }
}

while (queue.length > 0 && fresh > 0) {
    let size = queue.length 

    while (size) {
        let [x,y] = queue.shift()

        //Each loop is one minute
        for (let [dx,dy] of directions) {
            let nextX = x + dx
            let nextY = y + dy 

            //Find the next fresh orange to remove
            if (nextX < 0 || nextX >= grid.length || nextY < 0 || nextY >= grid[0].length || grid[nextX][nextY] !== 1) {
                continue
            }

            //Decrement the number of fresh oranges and mark it as rotten
            fresh--
            grid[nextX][nextY] = 2
            queue.push([nextX, nextY])
        }
        size--
    }

    minutes++
}

//If there are still fresh oranges left, return -1
return fresh ? -1 : minutes