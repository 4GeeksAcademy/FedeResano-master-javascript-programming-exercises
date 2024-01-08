function flipEveryNChars(input, n) {
    let reverseStr = '';
  
  for (let i = 0; i < input.length; i += n) {
    let substring = input.substr(i, n);

    reverseStr += substring.split('').reverse().join('');
  }

  return reverseStr; 

}

let input = 'a short example';
let output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma
