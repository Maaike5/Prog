var readlineSync = require("readline-sync")
var answer = readlineSync.question("goedemorgen hoe oud bent u?");
if(answer <= 17){
    console.log("U mag niet naar binnen")
}
else {
    answer = readlineSync.question("mag ik u id zien?")
    if(answer === 'ja') {


        console.log('kom veder.')
    }
    else {console.log('U mag niet naar binnen.')}
}