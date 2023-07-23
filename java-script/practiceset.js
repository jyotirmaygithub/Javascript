let a = 45;
let your_name = "my name is jyotirmay gupta and in my three years of this study i want to do too many things";
console.log(a + your_name)

let uu = true;
let yy = BigInt("445456867543");
let zzz = "right now i am learning javascript"

console.log(typeof yy);

const you = {
    roll_number: 45,
    where_live: "i live in delhi where you live by the way",
    school_name: 'my name was kala niketan bal vidyalaya',
    your: true
    // these above things are known by keys 
}

// you ="lets change things a bit"

//we have method to change values of keys and to add news keys in one variable

you["roll_number"]=75;
you["my_father"]="my father is ram krishna gupta"

const diction={
    delicate:'soft',
    prision:'cell',
    stuborn:'rigid',
    grandiose :'marvellous',
    giant :'big'
}
//if i write diction in console so it will print full objects and with its whole keys 
//but if i want to print only one word form the above dictionary so in that we have different syntax 
//lets try it
console.log(diction.stuborn) // this is first syntax
console.log(diction["grandiose"])