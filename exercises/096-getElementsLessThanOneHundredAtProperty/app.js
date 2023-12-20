function getElementsLessThan100AtProperty(obj, key) {
    if (obj[key] && Array.isArray(obj[key])) {
        return obj[key].filter(element => element < 100);
    } else {
        return [];
    }
}