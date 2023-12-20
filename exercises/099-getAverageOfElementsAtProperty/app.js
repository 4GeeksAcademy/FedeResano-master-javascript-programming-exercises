function getAverageOfElementsAtProperty(obj, key) {
  if(obj[key] && Array.isArray(obj[key])){
    let sum = 0;
    for(let element of obj[key]){
      sum += element;
    }
    return sum/obj[key].length;
  } else {
    return [];
  }
}