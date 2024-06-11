interface User {
    name: string;
    age: number;
    email: string;
}

const omittedUser: Omit<User, "age"> = {
    name: "John",
    email: "john@example.com"
};