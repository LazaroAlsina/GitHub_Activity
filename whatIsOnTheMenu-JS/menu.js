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
ui1="salsa dip";
ui2="chese hiuofauhjfasuhfaouhoufa "

// I really wish we had loops! and Functions!
//I really want a function for my program!
if(ui1 === menu[0]) {
    ui1 = menu[0];
} 
    else if (ui1 === menu[1]) {
        ui1 = menu[1]; 
    }
    else if (ui1 === menu[2]) {
        ui1 = menu[2]; 
    }
    else if (ui1 === menu[3]) {
        ui1 = menu[3]; 
    }
    else if (ui1 === menu[4]) {
        ui1 = menu[4]; 
    }
    else if (ui1 === menu[5]) {
        ui1 = menu[5]; 
    }
    else if (ui1 === menu[6]) {
        ui1 = menu[6]; 
    }
    else if (ui1 === menu[7]) {
        ui1 = menu[7]; 
    }
    else if (ui1 === menu[8]) {
        ui1 = menu[8]; 
    }
    else if (ui1 === menu[9]) {
        ui1 = menu[9];
    }
    else if (ui1 === menu[10]) {
        ui1 = menu[10]; 
    }
    else if (ui1 === menu[11]) {
        ui1 = menu[11];  
    } else {
        ui1="error"
    }

    if(ui2 === menu[0]) {
        ui2 = menu[0];
    } 
        else if (ui2 === menu[1]) {
            ui2 = menu[1]; 
        }
        else if (ui2 === menu[2]) {
            ui2 = menu[2]; 
        }
        else if (ui2 === menu[3]) {
            ui2 = menu[3]; 
        }
        else if (ui2 === menu[4]) {
            ui2 = menu[4]; 
        }
        else if (ui2 === menu[5]) {
            ui2 = menu[5]; 
        }
        else if (ui2 === menu[6]) {
            ui2 = menu[6]; 
        }
        else if (ui2 === menu[7]) {
            ui2 = menu[7];
            console.log("I stop here") 
        }
        else if (ui1 === menu[8]) {
            ui1 = menu[8]; 
        }
        else if (ui1 === menu[9]) {
            ui1 = menu[9];
        }
        else if (ui1 === menu[10]) {
            ui1 = menu[10]; 
        }
        else if (ui1 === menu[11]) {
            ui1 = menu[11];  
        } else {
            ui2="error"
            console.log("This should come out")
        }

console.log(ui1,ui2);