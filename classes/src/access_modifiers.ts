class Vehicle {
    public make: string;
    private model: string;
    protected year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    public getDetails(): void {
        console.log(`${this.make} ${this.model} (${this.year})`);
    }
}

class Car extends Vehicle {
    constructor(make: string, model: string, year: number) {
        super(make, model, year);
    }

    public getCarYear(): number {
        return this.year;  // Accessing protected property
    }
}

const car = new Car("Toyota", "Corolla", 2020);
car.getDetails();  // Output: Toyota Corolla (2020)
// car.model is not accessible here because it's private
console.log(car.getCarYear());  // Output: 2020
