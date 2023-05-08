function merge(arr1, arr2) {
    const result = [];
    let i = 0;
    let j = 0;
    while (i !== arr1.length && j !== arr2.length) {
        if (arr1[i] <= arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }
    if (arr1.length === i) return [...result, arr2[arr2.length-1]];
    return [...result, arr1[arr1.length-1]];
}

console.log(merge([1, 5, 8], [3, 4, 9]));
