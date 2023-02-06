function printGeneric<T>(value: T) {
    console.log(`typeof T is : ${typeof value}`);
    console.log(`value is : ${value}`)
}

printGeneric(1);
printGeneric("test");
printGeneric(true);
printGeneric(() => { });
printGeneric({ id: 1 });

function usingTwoTypes<A, B> ( first: A, second: B) {
    console.log(`type of A is ${typeof first}`);
    console.log(`type of B is ${typeof second}`);
}

usingTwoTypes('test', 1);
usingTwoTypes<string, number>('test2', 2);

class Concatenator<T extends Array<string> | Array<number>> {
    public concatenateArray(items: T): string {
        let returnString = "";
        for (let i = 0; i < items.length; i++) {
            returnString += i > 0 ? "," : "";
            returnString += items[i].toString();
        }
        return returnString;
    }
}

let c = new Concatenator();
let res = c.concatenateArray(['test', 'test2']);
let res2 = c.concatenateArray([1, 2]);

interface IPrintId {
    id: number;
    print(): void;
}
interface IPrintName {
    name: string;
    print(): void;
}

function useT<T extends IPrintId | IPrintName>(item: T): void {
    item.print();
    item.id = 1; // error
    item.name = "test"; // error
}

function printProperty<T, K extends keyof T>(obj: T, key: K){
    let value = obj[key];
    console.log(`object[${String(key)}] = ${value}`);
}

let obj1 = {
    id: 1,
    name: "myName",
    print() { console.log(`${this.id}`) }
}

printProperty(obj1, 'id');
printProperty(obj1, 'name');
printProperty(obj1, "print");

interface IPrint {
    print(): void;
}

interface ILogInterface<T extends IPrint> {
    logToConsole(iPrintObj: T);
}

class Log<T extends IPrint> implements ILogInterface<T> {
    logToConsole(iPrintObj: T) {
        iPrintObj.print();
    }
}

const printObj: IPrint = {
    print() {
        console.log(`printObject.print() called`);
    }
}

let logger = new Log();
logger.logToConsole(printObj);

class ClassA{ }
class ClassB{ }

function createClassInstance<T>(arg1: { new (): T }) {
    return new arg1()
}

let ins = createClassInstance(ClassA)