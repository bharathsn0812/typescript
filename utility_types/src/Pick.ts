interface User {
    name: string;
    age: number;
    email: string;
}

const pickedUser: Pick<User, "name" | "email"> = {
    name: "John",
    email: "john@example.com"
};