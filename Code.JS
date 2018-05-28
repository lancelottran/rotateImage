function rotateImage(a) {
    
    var n = a[0].length;

    for(var x = 0; x < n /2; x++)
    {
        for(var y = x; y < n - x - 1 ; y++)
        {
            var temp = a[x][y];
            
            //top = left
            a[x][y] = a[n-1-y][x];
            //left = bot
            a[n-1-y][x] = a[n-1-x][n-1-y];
            //bot = right
            a[n-1-x][n-1-y] = a[y][n-1-x];
            //right = temp
            a[y][n-1-x] = temp;
        }
    }
    
    return a;
}
