// build the chessboard object array

let buildChessBoard = () => {
        let chessboard = new Array
        i = 1
        j = 1
        while (i < 9) 
        {
            j = 1
            while (j < 9) {
                let object = [i,j]
                chessboard.push(object)
            j++
            }
        i++
        }
return chessboard
}