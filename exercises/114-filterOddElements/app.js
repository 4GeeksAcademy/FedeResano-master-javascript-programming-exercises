function filterOddElements(arr) {
  return arr.map(num => num % 2 !== 0);
}

let output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]
