function removeStringValuesLongerThan(num, obj) {
  for(let keys in obj){
    if(typeof obj[keys] === "string" && obj[keys].length > num){
      delete obj[keys];
    }
  }
  return obj;
}

let obj = {
  name: 'Montana',
  age: 20,
  location: 'Texas',
};

removeStringValuesLongerThan(6, obj);
console.log(obj); // { age: 20, location: 'Texas' }
