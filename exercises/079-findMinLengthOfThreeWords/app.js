function findMinLengthOfThreeWords(str1, str2, str3) {
    let minLength = Math.min(str1.length, str2.length, str3.length);
    return minLength;
}