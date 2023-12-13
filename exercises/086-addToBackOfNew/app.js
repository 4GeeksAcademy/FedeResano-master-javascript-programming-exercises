function addToBackOfNew(arr, element) {
    let aux = [...arr];
    aux.push(element);
    return aux;
}

let input = [1, 2];
let output = addToBackOfNew(input, 3);
console.log(input); // --> [1, 2]
console.log(output); // --> [1, 2, 3]
