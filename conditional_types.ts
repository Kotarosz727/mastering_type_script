type numberOrString<T> = T extends number ? number : string;

function logNumberOrString<T>(input: numberOrString<T>){
    console.log(`logNumberOrString : ${input}`);
}

logNumberOrString<number>(1);
logNumberOrString<string>("test");

// TS2345: Argument of type 'boolean' is not assignable to parameter of type 'string'.
logNumberOrString<boolean>(true);

interface IA {
    a: number;
}
interface IAb {
    a: number;
    b: string;
}
interface IAbc {
    a: number;
    b: string;
    c: boolean;
}

type abc_ab_a<T> =
    T extends IAbc ? [number, string, boolean] :
    T extends IAb ? [number, string] :
    T extends IA ? [number] :
    never;

function getTupleStringAbc<T>(tupleValue: abc_ab_a<T>): string
{
    let [...tupleDestructured] = tupleValue;
    let returnString = "|";
    for (let value of tupleDestructured) {
        returnString += `${value}|`;
    }
    return returnString;
}

let keyA = getTupleStringAbc<IA>([1]);
console.log(keyA);
