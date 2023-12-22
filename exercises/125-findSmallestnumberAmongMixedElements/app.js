function findSmallestNumberAmongMixedElements(arr) {
  let aux = 9999999;
  if(arr.length === 0) return 0;
  for(let i = 0; i < arr.length; i++){
    if(typeof arr[i] == "number"){
      if(arr[i] < aux) aux = arr[i];
    }
  }

  return isAux(aux) ? aux : 0;
}

let output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4
