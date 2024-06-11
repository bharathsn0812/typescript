interface OptionalUser {
    name?: string;
    age?: number;
    email?: string;
}

const requiredUser: Required<OptionalUser> = {
    name: "John",
    age: 30,
    email: "john@example.com"
};