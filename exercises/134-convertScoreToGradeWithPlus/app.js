function convertScoreToGradeWithPlusAndMinus(score) {

	switch(score){
		case(score >= 98 && score <= 100) return "A+";
			break;
		case(score > 92 && score < 98): return "A";
			break;
		case(score >= 90 && score <= 92): return "A-";
			break;
		case(score >= 88 && score < 90): return "B+";
			break;
		case(score > 82 && score < 88): return "B";
			break;
		case(score >= 80 && score <= 82): return "B-";
			break;
		case(score >= 78 && score < 80): return "C+";
			break;
		case(score > 72 && score < 78): return "C";
			break;
		case(score >= 70 && score <= 72): return "C-";
			break;
		case(score >= 68 && score < 70): return "D+";
			break;
		case(score > 62 && score < 68): return "D";
			break;
		case(score >= 60 && score <= 62): return "D-";
			break;
		case(score < 60 && score >= 0): return "F";
			break;
		default: "INVALID SCORE";
			break;
	}

}

let output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output); // --> 'A-'
