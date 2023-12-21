function getSmallestElementAtProperty(obj, key) {
  if (obj[key] && Array.isArray(obj[key])) {
    return Math.min(...obj[key]);
  }
  return [];
  
}

let obj = {
  key: [2, 1, 5]
};
let output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1
