function removeOddValues(obj) {
  for(let keys in obj){
    if(typeof obj[keys] == "number" && obj[keys] % 2 !== 0){
      delete obj[keys];
    }
  }
  return obj;
}

let obj = {
  a: 2,
  b: 3,
  c: 4
};
removeOddValues(obj);
console.log(obj); // --> { a: 2, c: 4 }
