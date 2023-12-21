function joinArrayOfArrays(arr) {
  let newArray = [];

  for(let i = 0; i < arr.length; i++){
     newArray = newArray.concat(arr[i]);
  }
  
  return newArray;
}

let output = joinArrayOfArrays([
  [1, 4],
  [true, false],
  ['x', 'y'],
]);

console.log(output); // --> [1, 4, true, false, 'x', 'y']
