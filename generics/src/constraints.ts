interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}

// Usage
loggingIdentity({ length: 10, value: "Hello" }); // 10

// The following would cause an error as it does not have a length property
// loggingIdentity(3); // Error
