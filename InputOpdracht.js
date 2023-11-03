let rl = require('readline-sync');

console.log("Choose a path");

console.log("N (north)");
console.log("S (south)");
console.log("E (east)");
console.log("W (west)");
const answer = rl.question('Please input the letter of your choice');

if ("N"){
    console.log("You go north you need to run there is a big bee that wants to sting you");
}

if ("S"){
    console.log("You go south you fall into a big hole and won't get out whitout help.");
}

if ("E"){
    console.log("You go east you walk in to a nig game store and can grab anything you want");
}

if ("W"){
    console.log("You go west you need to fight against an army spiders");
}