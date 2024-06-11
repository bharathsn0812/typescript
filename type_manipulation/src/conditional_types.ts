
type IsString<T> = T extends string ? 'Yes' : 'No';

type A = IsString<string>; // 'Yes'
type B = IsString<number>; // 'No'

let a: A = 'Yes';
let b: B = 'No';

console.log(a); // Output: Yes
console.log(b); // Output: No
