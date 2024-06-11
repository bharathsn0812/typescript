function identity<T>(arg: T): T {
    return arg;
}

// Usage
let output1 = identity<string>("Hello World");
let output2 = identity<number>(42);

console.log(output1); // Hello World
console.log(output2); // 42
