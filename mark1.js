var cases = require ("readline-sync");
var username = cases.question("what is your name?  ");
console.log("welcome"+username+" do you know puja? ");
var myname = cases.question("(yes or no) ");
var score=0;
if (myname==="yes"){
    console.log("good");
    score=score+1;
    console.log("your score is ",score);


}else{
    console.log("you dont know puja... opps!!!");
    score=score-1;
    console.log("your score is ",score);
}
console.log("do you know my hobby??");
var hob = cases.question("(dancing or cooking)  ")
if (hob === "dancing"){
    console.log("very good");
    score=score+1;
    console.log("your score is ",score);


}else{
    console.log("you dont know my hobby so i cut your one mark..");
    score=score-1;
    console.log("your score is ",score);

}
console.log("what is puja's favorite food ? ")
var food = cases.question(" (samosa or kachodi)  ");
if (food === "samosa"){
    console.log("very good");
    score=score+1
    console.log("your score is ",score);

}else{
    console.log("you dont know my favorite food so i cut your one mark");
    score=score-1;
    console.log("your score is ",score);

}
console.log("what i love to do?");
var love = cases.question("(over talking or travel)   ")
if (love==="travel"){
    console.log("very good");
    score=score+1;
    console.log("your score is",score);

}else{
    console.log("you dont know what i love to do so i cut your one mark?");
    score=score-1;
    console.log("your score is ",score);
}

console.log("i am honest or not?");
var honest = cases.question("(yet or not)  ")
if (honest==="not"){
    console.log("very good");
    score=score+1;
    console.log("your score is ",score);

}else{
    console.log("so sad");
    score=score-1;
    console.log("your score is ",score);

}
// console.log("your score is",score);