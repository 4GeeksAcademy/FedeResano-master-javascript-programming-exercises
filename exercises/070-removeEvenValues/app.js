function removeEvenValues(obj) {
    for(let keys in obj){
      if(typeof obj[keys] == "number" && obj[keys] % 2 == 0){
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
removeEvenValues(obj);
console.log(obj); // --> { b: 3 }
