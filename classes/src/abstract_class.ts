abstract class Shape {
    abstract area(): number;

    displayArea(): void {
        console.log(`Area: ${this.area()}`);
    }
}

class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}

const circle = new Circle(5);
circle.displayArea();  // Output: Area: 78.53981633974483
