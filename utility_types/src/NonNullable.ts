type NullableString = string | null | undefined;

type NonNullableString = NonNullable<NullableString>; // string
