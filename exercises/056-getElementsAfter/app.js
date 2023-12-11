function getElementsAfter(array, n) {
  return array.slice(n, array.length);
}

let output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2); 
console.log(output); // --> ['d', 'e']
