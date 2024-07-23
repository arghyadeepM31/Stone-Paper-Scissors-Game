let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScoreNumber = document.querySelector("#user-score");
let compScoreNumber = document.querySelector("#comp-score");
let reset = document.querySelector("#reset");
let backupReset = msg.innerText;

function generateCompChoice()
{
    let ch = ["rock", "paper", "scissors"];
    let compChoice = ch[Math.floor(Math.random()*3)];
    return compChoice;
}

function drawGame(userChoice, compChoice)
{
    msg.innerText = `Draw ! Your Choice : ${userChoice} .Computer Choice : ${compChoice}`;
    msg.style.backgroundColor = "#2b4162";
}

function showWinner(userWin, userChoice, compChoice)
{
    if(userWin)
    {
        userScore++;
        userScoreNumber.innerText = userScore;
        msg.innerText = `You win ! Your Choice : ${userChoice} Beats Computer Choice : ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else
    {
        compScore++;
        compScoreNumber.innerText = compScore;
        msg.innerText = `You lose ! Computer Choice : ${compChoice} Beats Your Choice : ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

function playGame(userChoice)
{
    let compChoice = generateCompChoice();
    if(userChoice == compChoice)
    {
        drawGame(userChoice, compChoice);
    }
    else
    {
        let userWin = true;
        if(userChoice == "rock")
        {
            userWin = (compChoice == "paper") ? false : true;
        }
        else if(userChoice == "paper")
        {
            userWin = (compChoice == "scissors") ? false : true;
        }
        else if(userChoice == "scissors")
        {
            userWin = (compChoice == "rock") ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

}

for(let choice of choices)
{
    choice.addEventListener("click" , ()=>{
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
}

reset.addEventListener("click" , ()=>{
    userScore = 0;
    compScore = 0;
    userScoreNumber.innerText = userScore;
    compScoreNumber.innerText = compScore;
    msg.innerText = backupReset;
    msg.style.backgroundColor = "#2b4162";
});