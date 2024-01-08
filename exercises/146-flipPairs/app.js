function flipPairs(input) {
 	let reverseStr = ""; 
	
	for(let i = 0; i < input.length; i+=2){
	if (i + 1 < input.length) {
      reverseStr += input[i + 1];
    }
    reverseStr += input[i];
  }	

	return reverseStr;

}

let input = "Can you see what this is about?";
let output = flipPairs(input);
console.log(output); // --> aC noy ues ehwtat ih ssia obtu?
