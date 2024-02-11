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

        if(isNaN(i) || i == ""){
            document.getElementById("labeltxt").innerHTML = "That is not a number";
        }
        else{
            if(i % 3 == 0 && i % 5 == 0){
                document.getElementById("labeltxt").innerHTML = "FizzBuzz";
                document.body.style.backgroundColor = "#FFFF00";
            }
            else if(i % 3 == 0){
                document.getElementById("labeltxt").innerHTML = "Fizz";
                document.body.style.backgroundColor = "#00FFFF";
            }
            else if(i % 5 == 0){
                document.getElementById("labeltxt").innerHTML = "Buzz";
                document.body.style.backgroundColor = "#FF0000";
            }
            else{
                document.getElementById("labeltxt").innerHTML = i;
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
