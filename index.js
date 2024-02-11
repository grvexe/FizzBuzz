/*
FizzBuzz
• print numbers from 1 to 100
• if number is divisible by 3 then print Fizz
• if number is divisible by 5 then print Buzz
• if number is divisible by both 3 and 5 then print FizzBuzz
*/

document.getElementById("mybtn").onclick = function fizzBuzz(){
    let i = document.getElementById("txtbox").value; 
    i = Number(i);   
    let labeltxt = document.getElementById("labeltxt");
    let txtbox = document.getElementById("txtbox");
    let mybtn = document.getElementById("mybtn");

    if(i == 0){
        document.getElementById("labeltxt").innerHTML = "Can't divide 0";
    }
    else{
        if(isNaN(i) || i == ""){
            document.getElementById("labeltxt").innerHTML = "Not a number!";
        }
        else{
            if(i % 3 == 0 && i % 5 == 0){
                document.getElementById("labeltxt").innerHTML = "Fizz Buzz";
                document.body.style.backgroundColor = "#e9ff92";
                labeltxt.style.color = "#031403";
                txtbox.style.border = "solid 2px #031403";
                txtbox.style.color = "#031403";
                mybtn.style.backgroundColor = "#031403";
                mybtn.style.color = "#e9ff92";

            }
            else if(i % 3 == 0){
                document.getElementById("labeltxt").innerHTML = "Fizz";
                document.body.style.backgroundColor = "#e9ff92";
                labeltxt.style.color = "#031403";
                txtbox.style.border = "solid 2px #031403";
                txtbox.style.color = "#031403";
                mybtn.style.backgroundColor = "#031403";
                mybtn.style.color = "#e9ff92";
            }
            else if(i % 5 == 0){
                document.getElementById("labeltxt").innerHTML = "Buzz";
                document.body.style.backgroundColor = "#e9ff92";
                labeltxt.style.color = "#031403";
                txtbox.style.border = "solid 2px #031403";
                txtbox.style.color = "#031403";
                mybtn.style.backgroundColor = "#031403";
                mybtn.style.color = "#e9ff92";
            }
            else{
                document.getElementById("labeltxt").innerHTML = i;
            }
        }
    }
        
}
    

























/*
Code for FizzBuzz from 1 to 100 in console
for(let i = 1; i <= 100; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log(`${i} FizzBuzz`);
    }
    else if(i % 3 == 0){
        console.log(`${i} Fizz`);
    }
    else if(i % 5 == 0){
        console.log(`${i} Buzz`);
    }
    else{
        console.log(i);
    }
}
*/
