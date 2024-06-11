type T = "a" | "b" | "c";
type U = "a";

type Excluded = Exclude<T, U>; // "b" | "c"
