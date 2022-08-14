
/// basic playRound conditions 
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        return "Tie";
    } 
    else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "paper")|| (playerSelection === "paper" && computerSelection === "rock")){
        return "Player";
    }
    else if ((playerSelection === "scissors" && computerSelection === "rock") || (playerSelection === "paper" && computerSelection === "scissors")|| (playerSelection === "rock" && computerSelection === "paper")){
        return "Computer";
  }
   
  }

// returns computer's choice
function getComputerChoice(){
    let tempArr = ["rock", "paper", "scissors"];
    let tempNum = [Math.floor(Math.random()*3)];
    return tempArr[tempNum];
}

//create a function for playSel which does the prompting and keep running it
function game(){
  let playerWins = 0;
  let computerWins = 0; 
  for(i = 0; i<5;i++){
    let playSel = prompt("Pick rock, paper or scissors. Capitalization does not matter.");
    playSel = playSel.toLowerCase();
    let compSel = getComputerChoice();
     let tempVar = playRound(playSel,"rock");
     if (tempVar === "Player"){ 
      playerWins++;
      console.log("Player")
    }
    if (tempVar === "Computer"){ 
      computerWins++;
      console.log("Computer")
    }
    if (tempVar === "Tie"){ 
    
      console.log("Tie")
    }
}
if (playerWins > computerWins){
  console.log("Player has won the game.");
}
if (playerWins === computerWins){
  console.log("Game tied.");
}
  if (playerWins < computerWins){
    console.log("Computer has won the game.");
}
}



console.log(game());