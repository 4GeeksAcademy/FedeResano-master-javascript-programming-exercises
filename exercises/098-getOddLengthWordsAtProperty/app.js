function getOddLengthWordsAtProperty(obj, key) {
    if (obj[key] && Array.isArray(obj[key])) {
        return obj[key].filter(element => element.length % 2 !== 0);
    } else {
        return [];
    }
}
