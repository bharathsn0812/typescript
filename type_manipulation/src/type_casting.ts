
let someValue: unknown = "TypeScript";
let strLength: number = (<string>someValue).length;

console.log(strLength); // Output: 10
