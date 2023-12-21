function getSquaredElementsAtProperty(obj, key) {
  if (obj[key] && Array.isArray(obj[key])) {
    return obj[key].map(number => Math.pow(number, 2));
  }
  return [];
}

let obj = {
  key: [2, 1, 5]
};
let output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]
