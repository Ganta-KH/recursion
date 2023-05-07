function fibonacci(num) {
    if (num === 0) return [0];

    const arr = [0, 1];

    if (num === 1) return arr;

    for (let i = 2; i < num; i++) arr.push(arr[i - 2] + arr[i - 1]);

    return arr;
}



function fibonacciRec(num) {
    if (num === 1) return [0]
    if (num === 2) return [0, 1]
    return [
        ...fibonacciRec(num - 1),
        fibonacciRec(num - 1)[num-2] + fibonacciRec(num - 1)[num-3]
    ];
}

console.log(fibonacci(8));
console.log(fibonacciRec(8))