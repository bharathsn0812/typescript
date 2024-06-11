// types.ts

// Union Type
type NumberOrString = number | string;

function printValue(value: NumberOrString): void {
    if (typeof value === "string") {
        console.log(`String value: ${value}`);
    } else {
        console.log(`Number value: ${value}`);
    }
}

// Intersection Type
type Person = {
    name: string;
    age: number;
};

type Employee = {
    employeeId: number;
};

type EmployeeDetails = Person & Employee;

const employee: EmployeeDetails = {
    name: "John Doe",
    age: 30,
    employeeId: 12345,
};

console.log(employee);

// Type Alias
type Point = {
    x: number;
    y: number;
};

const point: Point = { x: 10, y: 20 };
console.log(point);

// Literal Types
type Direction = "up" | "down" | "left" | "right";

function move(direction: Direction): void {
    console.log(`Moving ${direction}`);
}

move("up");
move("left");

// Enums
enum Colors {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE",
}

const favoriteColor: Colors = Colors.Green;
console.log(`Favorite color: ${favoriteColor}`);
