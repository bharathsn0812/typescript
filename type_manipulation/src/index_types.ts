
interface Person {
    name: string;
    age: number;
}

type PersonKey = keyof Person; // 'name' | 'age'

function getProperty(obj: Person, key: PersonKey) {
    return obj[key];
}

const person: Person = { name: "John", age: 30 };
console.log(getProperty(person, 'name')); // Output: John
