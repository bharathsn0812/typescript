interface User {
    name: string;
    age: number;
    email: string;
}

const readonlyUser: Readonly<User> = {
    name: "John",
    age: 30,
    email: "john@example.com"
};

// readonlyUser.name = "Jane"; // Error: Cannot assign to 'name' because it is a read-only property.
