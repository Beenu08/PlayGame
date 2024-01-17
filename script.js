let num=Math.floor(Math.random()*100+1); //value between 0 and 100
    // console.log(num);
    alert("Are you agree to play game");
    let userNum=prompt("Enter your number:");
    while(userNum!=num){
        if(userNum>num){
            userNum=prompt("You entered big number!");
        }else{
        userNum=prompt("You entered small number!");
        }
    }
    document.querySelector(".result").innerText="Confratulations! you got the game!";
