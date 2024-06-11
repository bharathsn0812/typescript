class AnimalClassBasic {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound(): void {
        console.log(`${this.name} makes a sound.`);
    }
}

const animal = new AnimalClassBasic("Dog");
animal.makeSound();  // Output: Dog makes a sound.
