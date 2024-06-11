class Person implements CanEat, CanSleep {
    eat!: () => void;
    sleep!: () => void;
}

applyMixins(Person, [CanEat, CanSleep]);

const person = new Person();
person.eat();  // Output: Eating...
person.sleep();  // Output: Sleeping...
