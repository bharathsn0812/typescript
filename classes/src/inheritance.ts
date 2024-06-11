class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound(): void {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    breed: string;

    constructor(name: string, breed: string) {
        super(name);
        this.breed = breed;
    }

    makeSound(): void {
        console.log(`${this.name} barks.`);
    }
}

const dog = new Dog("Buddy", "Golden Retriever");
dog.makeSound();  // Output: Buddy barks.
