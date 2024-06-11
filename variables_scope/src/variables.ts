// variables.ts

// Using let
let greeting: string = "Hello";
if (true) {
    let greeting: string = "Hi"; // This 'greeting' is scoped to the if block
    console.log(greeting); // Output: Hi
}
console.log(greeting); // Output: Hello

// Using const
const pi: number = 3.14;
// pi = 3.15; // This will cause an error because 'pi' is a constant

// Demonstrating block scope with const
if (true) {
    const pi: number = 3.14159; // This 'pi' is scoped to the if block
    console.log(pi); // Output: 3.14159
}
console.log(pi); // Output: 3.14
