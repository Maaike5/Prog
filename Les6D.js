var rl = require("readline-sync");

var boodschappenlijst = []

while(true){
const vraag = rl.question("wil je iets toevoegen of verwijderen (t voor toevoegen  v voor verwijderen)")

if (vraag == "t"){
    const lijst = rl.question("Wat wil je toevoegen? ")
    boodschappenlijst.push(lijst)
    console.log("op de lijst staat: " + boodschappenlijst)
}
else if (vraag == "v"){
    const verwijder = rl.question("wat wil je verwijderen? ")
    boodschappenlijst.splice(verwijder);
    console.log("op de lijst staat: " + boodschappenlijst)
}
else if (vraag == "end"){
    return;
}
}







