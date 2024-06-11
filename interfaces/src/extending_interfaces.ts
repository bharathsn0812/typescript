interface Animal {
    name: string;
    age: number;
}

interface Dog extends Animal {
    breed: string;
}

const myDog: Dog = {
    name: 'Buddy',
    age: 3,
    breed: 'Golden Retriever'
};

console.log(myDog);
