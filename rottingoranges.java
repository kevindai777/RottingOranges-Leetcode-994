//Java Solution

class Solution {
    public int orangesRotting(int[][] grid) {
        int fresh = 0;
        int minutes = 0;
        Queue<Pair<Integer, Integer>> queue = new LinkedList<>();
        int[][] directions = new int[][] {{0,1}, {1,0}, {0,-1}, {-1,0}};
        
        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[0].length; j++) {
                if (grid[i][j] == 1) {
                    fresh++;
                } else if (grid[i][j] == 2) {
                    queue.add(new Pair(i, j));
                }
            }
        }
        
        while (!queue.isEmpty() && fresh > 0) {
            int size = queue.size();
            
            while (size > 0) {
                Pair<Integer, Integer> curr = queue.poll();
                
                for (int[] dir : directions) {
                    int x = curr.getKey() + dir[0];
                    int y = curr.getValue() + dir[1];
                    
                    if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length || grid[x][y] != 1) {
                        continue;
                    }
                    
                    grid[x][y] = 2;
                    fresh--;
                    queue.add(new Pair(x, y));
                }
                
                size--;
            }
            
            minutes++;
        }
        
        return fresh > 0 ? -1 : minutes;
    }
}