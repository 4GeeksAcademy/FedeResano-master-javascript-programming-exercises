function getLongestWordOfMixedElements(arr) {
    let longestWord = "";

    if(arr.length === 0) return "";
    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] == "string"){
            if(arr[i].length > longestWord.length) longestWord = arr[i];
        }
    }

    return longestWord;
    
}

let output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'
