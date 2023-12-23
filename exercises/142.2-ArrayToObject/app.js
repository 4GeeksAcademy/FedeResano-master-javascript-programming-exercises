function fromListToObject(array) {
  let aux = {};
  for (let i = 0; i < array.length; i++) {
    aux[i[0]] = i[1];
  }
  return aux;

}

let output = fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]])
console.log(output) // --> { make: 'Ford', model: 'Mustang', year: 1964 }
