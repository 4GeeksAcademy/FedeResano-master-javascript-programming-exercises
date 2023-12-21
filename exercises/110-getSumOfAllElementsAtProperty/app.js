function getSumOfAllElementsAtProperty(obj, key) {
    let sum = 0;
    if (obj[key] && Array.isArray(obj[key])) {
        for(let i = 0; i < obj[key].length; i++){
            sum += obj[key][i];
        }
    }
    return sum;
}

let obj = {
    key: [4, 1, 8]
};
let output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13
