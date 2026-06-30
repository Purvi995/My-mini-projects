let userScore = 0;

let computerScore = 0;



function playGame(userChoice){


    let choices = [
        "rock",
        "paper",
        "scissors"
    ];


    let randomIndex =
    Math.floor(Math.random()*3);


    let computerChoice =
    choices[randomIndex];



    let result = "";



    if(userChoice === computerChoice)
    {
        result = "Draw 😐";
    }


    else if(

        (userChoice==="rock" &&
        computerChoice==="scissors")

        ||

        (userChoice==="paper" &&
        computerChoice==="rock")

        ||

        (userChoice==="scissors" &&
        computerChoice==="paper")

    )
    {

        result =
        `You win 🎉 Computer chose ${computerChoice}`;

        userScore++;

    }


    else
    {

        result =
        `Computer wins 😢 Computer chose ${computerChoice}`;

        computerScore++;

    }



    document.getElementById("result")
    .innerText=result;



    document.getElementById("userScore")
    .innerText=userScore;



    document.getElementById("computerScore")
    .innerText=computerScore;


}