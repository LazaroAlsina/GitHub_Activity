//What is the outcome of this operation?

const pie = true;

if (pie) {
    console.log("I love pie");
}

//Answer "I love pie" because its a true statment


//What is the outcome of this operation?
let corn = 0;

if (corn) {
    console.log("I love corn");
}

//Answer, nothing, the 0 means it off or closed. 


//What is the outcome of this operation

if (pie) {
    corn = 1
    if (corn) {
        console.log("I love corn");
    }
}

//Answer, I love corn because we had changed corn from a false statment to a true one now.

//What is the output of this operations?


if (corn) {
    console.log("I love corn");
}

//Anwer, "I love corn" because we change corn from 0 to 1. We need keep track of when our Variable change.


//What is the outcome of this operation?
if (corn < pie){
    console.log("Pie is better!")
}

//Answer, Pie will not print out because corn is 1, and pie is alway one therefore its a false statment.


//Make a if statment that will print "Pie is better" by changing corn from 1 to 0.

corn = 1;
if (corn < pie){
    console.log("Pie is better!")
}

//Anwer, change corn from 1 to 0.


//Question: How do we write a simple if statment that pie is better instead of pie? Use the question above as a template, make sure corn is = to 1

corn = 1;
if (corn == pie){
    console.log("Pie is better!")
}

//Answer replace the < to a ==
//Extra credit, why does == work and not ===?
//Extra credit answer, because == means different data types with the same value are taken in account. === must have the same datatype and value.

//Question: How do we display the datatype of pie and corn?

console.log(typeof pie, typeof corn)

//Answer, pie's datatype is a boolean, Corn's datatype is a number.

//Question, how can

//What is the output of this?

let burger="The best burgers are made at the moon"

if(corn === pie){
    console.log(burger)
}
else {
    console.log("There are no burgers on the moon!")
}

//Answer, There are no burgers on the moon! This is because corn's datatype and pie is not true. 

//Question: How do we add another if within the last question in case there is another condition meet?

burger="The best burgers are made at the moon"

if(corn === pie){
        console.log(burger)
    } else if (corn == pie) {
        console.log("The best burgers will be made at the moon.")
    } 
    else {
        console.log("There are no burgers on the moon!")
    }

//Answer, place an else if between the if and else and add a condtional that is == instead of ===

//What is the output base on this operation?

corn = 0

if(corn === pie){
    console.log(burger)
}  if (corn == pie) {
    console.log("The best burgers will be made at the moon.")
} 
if (corn != pie) {
    console.log("There are no burgers on the moon!")
}

//Anwer, There are no burgers on the moon! This is because the logical flow is the same, if we go to all the if statments, the last will be true and print it.

//Extra credit question, why is it important to know this difference? What is a real life example of this being usful?
//Extra credit answer, Sometimes we don't want if else or else to be activiate in our code. This can be due to a concept call program flow. If an else is a catch all, and we use it incorrectly for a logical choice, it can cause a bug where "There is no burgers in the moon!" example to always be displayed instead of "error".