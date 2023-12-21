function getProductOfAllElementsAtProperty(obj, key) {
  if (obj[key] && Array.isArray(obj[key])) {
    let product = 1;
    for (let i = 0; i < obj[key].length; i++) {
      product *= obj[key][i];
    }
    return product;
  }

  return undefined;

}

let obj = {
  key: [1, 2, 3, 4]
};
let output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24
