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

let buildDependencies = (chessboard) => {
    let dependenciesGraph = new Array
    chessboard.forEach((element, index) => {
        dependenciesGraph.push([element[0], element[1]])
        dependenciesGraph[index].push(checkAllMoves(element[0], element[1]))
    });
    return dependenciesGraph

}

checkAllMoves = (x, y) => {
    let result = new Array
    result.push([x+1, y+2])
    result.push([x-1, y+2])
    result.push([x-2, y+1])
    result.push([x-2, y-1])
    result.push([x+1, y-2])
    result.push([x-1, y-2])
    result.push([x+2, y+1])
    result.push([x+2, y-1])
    let outcome = result.filter((item) => { 
        if(item[0] < 8 && item[0] > 0 && item[1] < 8 && item[1] > 0) 
        return true 
        else return false 
    }
    )
    return outcome
}