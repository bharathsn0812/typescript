
namespace MyNamespace {
    export function greet() {
        console.log("Hello from MyNamespace!");
    }
}

namespace MyNamespace {
    export namespace NestedNamespace {
        export function nestedGreet() {
            console.log("Hello from NestedNamespace!");
        }
    }
}

namespace MyNamespace {
    export function farewell() {
        console.log("Goodbye from MyNamespace!");
    }
}
