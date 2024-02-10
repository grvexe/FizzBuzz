/*
FizzBuzz
• print numbers from 1 to 100
• if number is divisible by 3 then print Fizz
• if number is divisible by 5 then print Buzz
• if number is divisible by both 3 and 5 then print FizzBuzz
*/

document.getElementById("mybtn").onclick = function fizzBuzz(){
    let i = document.getElementById("txtbox").value;
    

    if(i % 3 == 0 && i % 5 == 0){
        document.getElementById("labeltxt").innerHTML = "FizzBuzz";
    }
    else if(i % 3 == 0){
        document.getElementById("labeltxt").innerHTML = "Fizz";
    }
    else if(i % 5 == 0){
        document.getElementById("labeltxt").innerHTML = "Buzz";
    }
    else{
        document.getElementById("labeltxt").innerHTML = i;
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
