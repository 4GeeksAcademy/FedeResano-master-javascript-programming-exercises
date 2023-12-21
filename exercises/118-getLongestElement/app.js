function getLongestElement(arr) {
    let longestStr = "";

    for(let i = 0; i < arr.length; i++){
        if(arr[i].length > longestStr.length) longestStr = arr[i];
    }
    
    return longestStr;
}

let output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'
