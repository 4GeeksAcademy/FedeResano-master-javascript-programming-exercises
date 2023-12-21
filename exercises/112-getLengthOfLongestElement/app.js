function getLengthOfLongestElement(arr) {
    let longest = arr[0].length;

    for(let i = 1; i < arr.length; i++){
        if(arr[i].length > longest) longest = arr[i];
    }

    return longest;
    
}

let output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5
