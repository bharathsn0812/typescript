
function isString(value: any): value is string {
    return typeof value === 'string';
}

function printLength(value: string | number) {
    if (isString(value)) {
        console.log(value.length); // value is treated as string
    } else {
        console.log(value.toFixed(2)); // value is treated as number
    }
}

printLength("Hello"); // Output: 5
printLength(123.456); // Output: 123.46
