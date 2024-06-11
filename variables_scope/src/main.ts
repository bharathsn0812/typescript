// main.ts

import './variables';

function demonstrateScope() {
    let x: number = 10;
    if (true) {
        let x: number = 20; // Scoped to the if block
        console.log(x); // Output: 20
    }
    console.log(x); // Output: 10

    const y: number = 5;
    if (true) {
        const y: number = 15; // Scoped to the if block
        console.log(y); // Output: 15
    }
    console.log(y); // Output: 5
}

demonstrateScope();
