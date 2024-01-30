const CHOICE_LIST = ["Rock", "Paper", "Scissors"]

function getComputerChoice() {
    const randIndex = Math.floor(Math.random() * 3)
    return CHOICE_LIST[randIndex]
}

function getGameResult(playerChoice, computerChoice) {

    // computes the logic for determining the winner of one
    // round of rock, paper, scissors.
    return "Player"
}

function playRound(playerChoice, computerChoice) {
    // play game
    // determine who wins
    // log winner
    console.log(`Player played: ${playerChoice}`)
    console.log(`Computer played: ${playerChoice}`)
    const result = getGameResult(playerChoice,computerChoice)
    console.log(`${playerChoice} won the game`)

}