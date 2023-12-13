function findShortestOfThreeWords(word1, word2, word3) {
    let aux = word1;
    if(aux > word2) aux = word2;
    if(aux > word3) aux = word3;
    return aux;
}

let output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'
