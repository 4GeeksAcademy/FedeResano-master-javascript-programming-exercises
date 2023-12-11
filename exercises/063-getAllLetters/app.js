function getAllLetters(str) {
    let arr = [];
    for (let i = 0; i < str.length; i++){
        arr.push(str[i]);
    }
    return arr;
}

let output = getAllLetters('Radagast');
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']
