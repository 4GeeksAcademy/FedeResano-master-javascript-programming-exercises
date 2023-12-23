function isEvenWithoutModulo(num) {

	if(num === 0) return false;
	
	while(num >= 2){
		num -= 2;
	}

	return num === 0; 

}

let output = isEvenWithoutModulo(8);
console.log(output); // --> true
