function getStringLength(string) {
  let strLength = 0;

	for(let char in string){
		strLength++;
	}

	return strLength;
}

let output = getStringLength('hello');
console.log(output); // --> 5
