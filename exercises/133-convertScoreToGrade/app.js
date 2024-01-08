function convertScoreToGrade(score) {
   let grade = "INVALID SCORE"; 

	switch(score){
		case(score <= 100 && score >= 90): grade = "A";
			break;
		case(score < 90 && score >= 80): grade = "B";
			break;
		case(score < 80 && score >= 70): grade = "C";
			break;
		case(score < 70 && score >= 60): grade = "D";
			break;
		case(score < 60 && score >= 0): grade = "F";
			break;
		default:
			break;
	}

	return grade;
}

let output = convertScoreToGrade(91);
console.log(output); // --> 'A'
