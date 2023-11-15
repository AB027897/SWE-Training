
if(playerOne === computer) {
     
}else if(playerOne === "rock") {
    if(computer  == "paper") {
        console.log("Computer wins");
    } else {
        console.log("Player One wins");
    }
} else if(playerOne === "paper"){
    if(computer === "scissors") {
        console.log("Computer wins");
    } else {
        console.log("Player One wins");
    }
} else {
    if(computer === "rock") {
        console.log("Computer wins");
    } else {
        console.log("Player One wins");
    }
}
