function main(){
    score = askFive();
    if (score==0) alert("Perfect!");
    else alert("You got " + score + " out of 5 wrong.");
}
function askFive(){
    var score = 0;
    for (let question = 1; question<6; question++){
        score+=askQuestion(question);
    }
    return score
}
function askQuestion(question){
    wrong = 0;
    let a = Math.floor(Math.random()*6)+3;
    let b = Math.floor(Math.random()*6)+3;
    let product = a*b;
    let equation = (question + ": " + a + " * " + b + " =?");
    let answer = 0;
    while (answer!=product && answer!="q") {
        answer = prompt(equation);
        if (answer=="q"){
            alert("Quitter!");
            wrong = 2;
        }
        else if (answer==product) alert("Correct!");
        else {
            alert("Incorrect! Try Again.");
            wrong = 1;
        }
    }
    return wrong;
}
