function computeFactorialOfN(n) {
   if(n === 0) return 1;
	let factorial = 1;
	for (let i = 1; i <= n; i++){
		factorial *= i;
	}
	return factorial;
}

let output = computeFactorialOfN(4);
console.log(output); // --> 24
