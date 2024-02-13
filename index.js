/*
FizzBuzz
• if number is divisible by 3 then print Fizz
• if number is divisible by 5 then print Buzz
• if number is divisible by both 3 and 5 then print FizzBuzz
*/

// Declaring DOM elements as variables to be used in functions

let labeltxt = document.getElementById("labeltxt");
let txtbox = document.getElementById("txtbox");
let mybtn = document.getElementById("mybtn");

// Function to reset color of the page to original state

function resetState(){
    document.body.style.backgroundColor = "#031403";
    labeltxt.style.color = "#e9ff92";
    txtbox.style.border = "solid 2px #e9ff92";
    txtbox.style.color = "#e9ff92";
    mybtn.style.backgroundColor = "#e9ff92";
    mybtn.style.color = "#031403";
    labeltxt.textContent = "Enter a number";
}

// Function to change color of the page is FizzBuzz message is displayed

function changeState(){
    document.body.style.backgroundColor = "#e9ff92";
    labeltxt.style.color = "#031403";
    txtbox.style.border = "solid 2px #031403";
    txtbox.style.color = "#031403";
    mybtn.style.backgroundColor = "#031403";
    mybtn.style.color = "#e9ff92";
}

// Calling the resetState() function when the textbox is clicked on

txtbox.addEventListener('focus', resetState);

// If else code to manipulate elements on DOM and display Fizz Buzz message

document.getElementById("mybtn").onclick = function fizzBuzz(){
    let i = txtbox.value;   
 
    if(i == ""){
        labeltxt.textContent = "Empty field";
    }
    else if (i == 0){
        labeltxt.textContent = "Can't divide by 0";
    }
    else{
        if(isNaN(i)){
            labeltxt.textContent = "Not a number!";
        }
        else{
            if(i % 3 == 0 && i % 5 == 0){
                labeltxt.textContent = "Fizz Buzz";
                changeState();

            }
            else if(i % 3 == 0){
                labeltxt.textContent = "Fizz";
                changeState();
            }
            else if(i % 5 == 0){
                labeltxt.textContent = "Buzz";
                changeState();
            }
            else{
                labeltxt.textContent = i;
            }
        }
    }
        
}
