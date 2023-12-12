function convertDoubleSpaceToSingle(str) {
    return str.split('  ').join(' ');
}

let output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"
