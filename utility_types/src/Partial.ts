interface User {
    name: string;
    age: number;
    email: string;
}

const partialUser: Partial<User> = {
    name: "John"
};