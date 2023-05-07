function fibonacci(num) {
    if (num === 0) return [0];

    const arr = [0, 1];

    if (num === 1) return arr;

    for (let i = 2; i < num; i++) arr.push(arr[i-2] + arr[i-1]);
    
    return arr
}

console.log(fibonacci(8))
