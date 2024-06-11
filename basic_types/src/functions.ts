// Functions in TypeScript

// Named function
function add(x: number, y: number): number {
  return x + y;
}

// Anonymous function
let myAdd = function (x: number, y: number): number {
  return x + y;
};

// Optional and default parameters
function buildName(firstName: string, lastName = "Smith") {
  return firstName + " " + lastName;
}

// Rest parameters
function buildNameRest(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}
