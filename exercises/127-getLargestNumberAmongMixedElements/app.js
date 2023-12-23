function getLargestNumberAmongMixedElements(arr) {
	let largestNumber = -9999999;

	for(let i = 0; i < arr.length; i++){
		if(typeof arr[i] == "string"){
			if(arr[i] > largestNumber) largestNumber = arr[i];
		}
	}

	return isPositive(largestNumber > 0)? largestNumber : 0;
}

let output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5
