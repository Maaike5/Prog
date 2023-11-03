function RollDice(){
    let getal = Math.ceil(Math.random() * 6);
    return getal;
}

function RollStat(){
    let d1 = RollDice();
    let d2 = RollDice();
    let d3 = RollDice();
    let d4 = RollDice();
    let arr = [d1, d2, d3, d4];
    console.log(arr);
    

    const lowest = Math.min(...arr);
    return arr[0] + arr[1] + arr[2] + arr[3] - lowest
}
console.log("STR,",RollStat());
console.log("DEX,",RollStat());
console.log("CON,",RollStat());
console.log("INT,",RollStat());
console.log("WIS,",RollStat());
console.log("CHA,",RollStat());