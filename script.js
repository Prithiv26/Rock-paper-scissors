function getComputerChoice()
{
    let c1 = "rock";
    let c2 = "scissors";
    let c3 = "paper";
    let num = Math.floor(Math.random() * 3);
    if (num === 0)
    {
        return c1;
    }
    else if (num === 1)
    {
        return c2;
    }

    else
    {
        return c3;
    }
}

function playRound(playerSelection, computerSelection)
{
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection)
    {
        console.log("It is a tie!");
        return "It is a tie";
    }
    else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "rock"))
    {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else{
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function playGame()
{
    let playerScore = 0;
    let computerScore = 0;
    let choice;
    for (let i = 0; i <5 ; i++)
    {
        choice = prompt("Enter your choice: ", "paper");
        if (playRound(choice,getComputerChoice()).includes("Win"))
        {
            playerScore += 1;
        }
        else{
            computerScore += 1;
        }
    }

    if (playerScore === computerScore)
    {
        console.log("It is a tie!");
    }
    else if(playerScore > computerScore)
    {
        console.log("You Win!");
    }
    else
    {
        console.log("You Lose!");
    }
}

playGame();