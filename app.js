const max=prompt("enter the max value");
const random=Math.floor(Math.random()*max)+1;

let guess=prompt("guess the random number");
while(true){
    if(guess=="quit"){
        console.log("user quit");
        break;
    }
    if(guess==random){
        console.log("yes you are right. random no is",random);
        break;
    }
    else if(guess>random){
        guess=prompt("hint your guess is larger than random no. please try again");
        
    }
    else {
        guess=prompt("hint your number is smaller than random no. please try again");
        
    }
}
