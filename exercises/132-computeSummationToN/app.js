function computeSummationToN(n) {
 	let result = 0;

	for(let i = 0; i <= n; i++) result += i;

	return result;
}

let output = computeSummationToN(6);
console.log(output); // --> 21

