
type ReadonlyPerson = {
    readonly [K in keyof Person]: Person[K];
};

const readonlyPerson: ReadonlyPerson = { name: "John", age: 30 };

// readonlyPerson.name = "Doe"; // Error: Cannot assign to 'name' because it is a read-only property.
console.log(readonlyPerson); // Output: { name: 'John', age: 30 }
