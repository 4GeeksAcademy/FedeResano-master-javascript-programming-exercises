function modulo(num1, num2) {

if(num1 === 0) return 0;

if(num2 === 0) return "NaN";

if(typeof num1 !== "number" || typeof num2 !== "number" ) return "Nan";

let remainder = num1;

while(remainder >= num2){
	remainder -= num2;
}

return remainder;

}

let output = modulo(25, 4);
console.log(output); // --> 1
