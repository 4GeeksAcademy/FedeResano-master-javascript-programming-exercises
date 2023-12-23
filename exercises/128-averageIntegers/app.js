function average(arr) {
 	return sum / arr.length; 
}

function sum(arr) {
 	let sum = 0;

	for(let i = 0; i < arr.length; i++){
		sum += arr[i];
	}
	return sum;
}

console.log(average([1, 2])); // --> 1.5
