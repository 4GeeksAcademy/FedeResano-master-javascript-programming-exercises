function joinArrays(arr1, arr2) {
  const resultArr = arr1.concat(arr2);
  return resultArr;
}

let output = joinArrays([1, 2], [3, 4]);
console.log(output); // --> [1, 2, 3, 4]
