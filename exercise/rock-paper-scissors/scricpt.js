const CHOICE_LIST = ["Rock", "Paper", "Scissors"]
function getComputerChoice() {
    let randIndex = Math.floor(Math.random() * 3)
    return CHOICE_LIST[randIndex]
}