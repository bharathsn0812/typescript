// main.ts

import './types';

function demonstrateTypes() {
    // Using Union Type
    printValue("Hello");
    printValue(123);

    // Using Intersection Type
    const anotherEmployee: EmployeeDetails = {
        name: "Jane Smith",
        age: 25,
        employeeId: 67890,
    };
    console.log(anotherEmployee);

    // Using Literal Types
    move("down");
    move("right");

    // Using Enums
    const anotherColor: Colors = Colors.Blue;
    console.log(`Another favorite color: ${anotherColor}`);
}

demonstrateTypes();
