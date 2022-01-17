const GRID_CELLS = document.querySelectorAll('[data-position]')

const createPlayer = (playerName,symbolType) => {
    const name = playerName
    const symbol = symbolType
    let winCount =  0

    const getName = () => {
        return name
    }

    const getSymbol = () => {
        return symbol
    }

    const incrementWinCount = () => {
        winCount += 1
    }

    return {getName,getSymbol,incrementWinCount}
}


const playerOne = createPlayer("Yahaya Usman","O")
const playerTwo = createPlayer("Computer","X")


const gameBoard = ((playerOne,playerTwo) => {
    let locations = [[null,null,null],[null,null,null],[null,null,null]]
    const players = [playerOne, playerTwo]
    let currentPlayer = players[0]
    let isWin = false
    const locationMapping = {
        "1":[0,0],
        "2":[0,1],
        "3":[0,2],
        "4":[1,0],
        "5":[1,1],
        "6":[1,2],
        "7":[2,0],
        "8":[2,1],
        "9":[2,2],
    }


    const checkWin = (row,col) => {
        // checks the diagonals, rows and coloums to see if symbol matches
        // returns true if they match

        if((locations[row][0] === locations[row][1]) && (locations[row][1] === locations[row][2])){
            if (locations[row][1] === currentPlayer.getSymbol()){
                return true
            }
        }
        
        if((locations[0][col] === locations[1][col]) && (locations[1][col] === locations[2][col])){
            if (locations[0][col] === currentPlayer.getSymbol()){
                return true
            }
        }

        if((row === 0 && col ===0) || (row === 2 && col === 2) || (row === 1 && col === 1)){
            if((locations[0][0] === locations[1][1]) && (locations[1][1] === locations[2][2])){
                if (locations[0][0] === currentPlayer.getSymbol())
                    return true
            }
        }

        if((row === 2 && col === 0) || (row === 0 && col === 2) || (row === 1 && col === 1)){
            if((locations[0][2] === locations[1][1]) && (locations[1][1] === locations[2][0])){
                if (locations[0][2] === currentPlayer.getSymbol()){
                    return true
                }
            }
        }

        return false
    }


    const resetBoard = () => {
        currentPlayer.incrementWinCount()
        locations = [[],[],[]]
        isWin = false
        currentPlayer = players[Math.floor(Math.random()*2)]
    }


    const insertSymbol = (symbol,row,col) => {
        locations[row][col] = symbol
    }


    const play = (location) => {
        let symbol = currentPlayer.getSymbol()
        let [row,col] = locationMapping[location]
        if(!(locations[row][col] === null)) return
        insertSymbol(symbol,row,col)
        console.log(locations[row][col])
        if(checkWin(row,col)){
            isWin = true
            console.log(`${currentPlayer.getName()} Won`)
            resetBoard()
        }
        else{
            if(currentPlayer === players[0]) 
                currentPlayer = players[1]
            else 
                currentPlayer = players[0]
        }
    }

    return {play}

})(playerOne,playerTwo)



GRID_CELLS.forEach(btn => {
    btn.addEventListener('click',() => {
        // once a button is clicked,
        // get the data attribute for the clicked button
        // the data attribute as the location value for calling the gaem object
        let location = btn.getAttribute('data-position')
        gameBoard.play(location)
    })
})