function getAllButLastElementOfProperty(obj, key) {
  if (obj[key] && Array.isArray(obj[key])) {
    return obj[key].slice(0, -1);
  }
  return [];
    
}

let obj = {
  key: [1, 2, 3]
};
let output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1, 2]
