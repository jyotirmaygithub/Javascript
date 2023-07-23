// steps which you need to follow in the making of that fun activity

// random number apperance store in the variable
// take guess from the user between numbers from 1 to 100 
// if guess is wrong you need to suggest where it lies not exactly but in the range 
// counting of chances need to be taken into account 
// terminate the program if user got exact number by telling which is the exact number


let random_number = Math.random() * 100;
random_number = Number.parseInt(random_number)
console.log(random_number)
let copy = random_number

let write;
let chances = 0 ;
do {
    write = prompt("enter your guess number")
    write = Number.parseInt(write);
    console.log(write)

    if(write<copy){
        alert("your entered number is smaller than the actual number")
    }
    else if(write>copy){
        alert("your enterted value is greater than the actual number")
    }
    else if(write == copy){
        alert("you entered correct number")
        console.log("finally your guess is right ",copy )
    }

    chances++
} while (write != random_number);

console.log("these many chances you took to reach at correct guess = ", chances)
