function randomwoord(inputstring){
   let outputstring = '';
   for(let i = 0; i < inputstring.length; i++){
    const random = Math.random();
    if (random < 0.5) {
        outputstring += inputstring[i].toUpperCase();
    }
    else{
        outputstring += inputstring[i].toLowerCase();
    }
  }
 return outputstring;
}

const input = 'Java script is erg leuk'
const output = randomwoord(input);
console.log(output);