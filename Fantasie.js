const rl = require('readline-sync');
let playerName = "squall";
let playerHealth = 21;

console.log("je hebt: " + playerHealth + "hp")

while(playerHealth > 0){
const question = rl.question("wil je de zombie aanvallen?: [vechten/vluchten]")
if (question == "vechten"){
  const playerhealth = Math.floor(Math.random() * 10)
  console.log("zombie pakt: " + playerhealth)
  const damage = Math.floor(Math.random() * 10)
  playerHealth -= damage
  console.log("de speler pakt: " + damage + "hp")
  console.log(playerhealth)
}else if (question == "vluchten"){
  console.log("Je vlucht")
  return;
}
}
  
