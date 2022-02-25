// const word1 = prompt("word1");
// const word2 = prompt("word2");

// if(word1.length > word2.length){
//     alert(word1);
// }else if(word1.length < word2.length){
//     alert(word2);
// }else{
//     alert("same word length")
// }

let arrNum = []

for (let i = 0; i < 10; i++) {
    const num = parseInt(prompt("inserisci un numero"));
    arrNum.push(num);
}

console.log(arrNum);

let somma = 0;
for (let i = 0; i < arrNum.length; i++) {
    somma = somma + arrNum[i];
}

alert(somma);         