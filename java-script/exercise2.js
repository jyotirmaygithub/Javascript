//basic instructions to make program

// game - stone paper cissor
//three times or ten times game will execute

alert("Be ready to play game with thriler")
alert("options to choose - snake, water, gun")

let words;
let choose, store
let revole =0, chances = 0;
let any;

do {
    any = prompt("enter your preference for the game")
    words = ['snake','water', 'gun']
    choose = Math.random(words) * 3
    choose = Number.parseInt(choose)
    store = words[choose]
    console.log(store)

    if (any == store) {
        alert("tie")
    }
    else if (any == "snake") {
        if (store == 'gun') {
            alert("gun can kill snake easily - lose")
        }
        else {
            alert("snake makes it dominance here - won")
            chances++;
        }
    }
    else if (any == "water") {
        if (store == 'snake') {
            alert("snake will drink water easily - lose")
        }
        else {
            alert("water will drown gun easily underwater - won")
            chances++;
        }
    }

    else if (any == "gun") {
        if (store == 'water') {
            alert("gun will drown easily - lose")
        }
        else {
            alert("gun will kil snake easily in a sec - won")
            chances++;
        }
    }
    revole++;
} while (revole <5);
console.log("your won numbering", chances)
document.write("<h1>your won numbering</h1>",chances)