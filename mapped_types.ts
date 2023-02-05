interface Irequired {
    a: number;
    b: string;
}

let ab: Irequired = {
    a: 1,
    b: 'test',
}

type weakInterface<T> = {
    [K in keyof T]? : T[K];
}

let allOptional: weakInterface<Irequired> = {
    a: 2,
};