function isOddWithoutModulo(num) {
	
	if(num === 0) return false;
	
	while(num >= 2){
		num -= 2;
	}

	return num !== 0; 

}

let output = isOddWithoutModulo(17);
console.log(output); // --> true
