function computeCompoundInterest(principal, interestRate, compoundingFrequency, timeInYears) {
	let A = principal * Math.pow((1 + interestRate / compoundingFrequency), timeInYears * compoundingFrequency);

	return A;

}

let output = computeCompoundInterest(1500, .043, 4, 6);
console.log(output); // --> 438.83682213410543
