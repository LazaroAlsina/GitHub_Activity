/*Lets make a menu for Jorge!

Please make a menu for food, you can use a list of "if" or switch statments to make a simple menu.
Make sure to use varabiles to save the options that a user selected and display them on the console.
Good luck!
*/
//These are the var that will be used for the menu program. ui = user input, and the menu will hold all food types.
let menu=["fries", "bfWing", "chesse","pie", "onion rings", "chesse dip", "chesse sink", "salsa dip", "stake steak", "chesse pund sink"]
let ui1="Please pick"
let ui2="Please pick"

//Manually adding what the user want. IT would be nice if someone can program a automatic way of placing the input here.
//We need a loop that can find the numbers and match them base on the arry to the menu in the future.
ui1="fries";


if(ui1 === menu[0]) {
    ui1 = menu[0]
}

console.log(ui1);