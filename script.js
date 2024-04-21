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
        console.log("It is a tie!1");
        return "It is a tie";
    }
    else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "rock"))
    {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else 
    {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    
}    

function playGame()
{
    let done = false;
    let playerScore = 0;
    let computerScore = 0;
    let div;
    let div2;
    let div3;
    const container = document.querySelector(".container");
    const scoreDiv = document.querySelector(".resultDiv");
    container.addEventListener("click",function listener(e){
        if (!div)
        {
            div = document.createElement("div");
            div2 = document.createElement("div");
            div3 = document.createElement("div");
            scoreDiv.appendChild(div);
            scoreDiv.appendChild(div2);
            scoreDiv.appendChild(div3);
        }
        div.textContent = playRound(e.target.id,getComputerChoice());
        div.classList.add("div1");
        div2.classList.add("div2");
        div3.classList.add("div3");
        if (div.textContent.includes("Win"))
        {
            playerScore += 1;
        }
        else if (div.textContent.includes("Lose"))
        {
            computerScore += 1;
        }
        div2.textContent = `PlayerScore: ${playerScore}`;
        div3.textContent = `ComputerScore: ${computerScore}`;
        
        if (playerScore === 5 || computerScore === 5)
    {
        if (playerScore === computerScore)
        {
            div.textContent = "It is a tie!";
            console.log("It is a tie!");
            container.removeEventListener("click",listener);
           
            
        }
        else if(playerScore > computerScore)
        {
            div.textContent = "You win!";
            console.log("You Win!");
            container.removeEventListener("click",listener);
           
            
        }
        else
        {
            div.textContent = "You Lose!";
            console.log("You Lose!");
            container.removeEventListener("click",listener);
           
            
            
        }
        
    }
    
    });
    console.log("done");
}

playGame();