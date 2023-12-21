function getLargestElementAtProperty(obj, key) {
  if (obj[key] && Array.isArray(obj[key])) {
    return Math.max(...obj[key]);
  }
  return [];
    
}

let obj = {
  key: [1, 2, 4]
};
let output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4
