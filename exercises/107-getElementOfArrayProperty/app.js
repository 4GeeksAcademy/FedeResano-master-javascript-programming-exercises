function getElementOfArrayProperty(obj, key, index) {
    if (obj[key][index]) {
        return obj[key][index]
    } else {
        return undefined;
    }
}

let obj = {
    key: ['Jamil', 'Albrey']
};
let output = getElementOfArrayProperty(obj, 'key', 0); 
console.log(output); // --> 'Jamil'
