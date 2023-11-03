const readline = require('readline-sync');

function berekenLeeftijd(geboorteJaar, geboorteMaand, geboorteDag) {
  const geboortedatum = new Date(geboorteJaar, geboorteMaand - 1, geboorteDag);
  const leeftijdInMilliseconden = Date.now() - geboortedatum.getTime();
  return leeftijdInMilliseconden / (1000 * 60 * 60 * 24 * 365.25);
}

const geboorteJaar = parseInt(readline.question("Welk jaar ben je geboren? "));
const geboorteMaand = parseInt(readline.question("Welke maand ben je geboren? "));
const geboorteDag = parseInt(readline.question("Welke dag ben je geboren? "));

const leeftijd = berekenLeeftijd(geboorteJaar, geboorteMaand, geboorteDag);

console.log(`Je bent ongeveer ${Math.floor(leeftijd)} jaar oud.`);