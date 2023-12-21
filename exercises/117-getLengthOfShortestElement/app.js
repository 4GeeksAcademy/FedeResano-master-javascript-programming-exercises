function getLengthOfShortestElement(arr) {
    let smallestStr = 999;

    for(let i = 0; i < arr.length; i++){
        if(arr[i].length < smallestStr) smallestStr = arr[i].length;
    }

    return smallestStr;
}

let output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3
