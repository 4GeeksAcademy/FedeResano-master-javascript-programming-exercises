function multiplyBetween(num1, num2) {
	let result = 1;

	for (let i = num1; i < num2; i++){
		result *= arr[i];
	}

	return isGreater(num1 > num2) ? 0 : result;
}

let output = multiplyBetween(2, 5);
console.log(output); // --> 24
