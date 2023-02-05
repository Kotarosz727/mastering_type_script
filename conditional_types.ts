type numberOrString<T> = T extends number ? number : string;

function logNumberOrString<T>(input: numberOrString<T>){
    console.log(`logNumberOrString : ${input}`);
}

logNumberOrString<number>(1);
logNumberOrString<string>("test");

// TS2345: Argument of type 'boolean' is not assignable to parameter of type 'string'.
logNumberOrString<boolean>(true);