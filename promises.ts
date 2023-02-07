import * as fs from "fs";

fs.promises.readFile("./test1.txt")
    .then((value) => {
        console.log(`ps test1.txt read : ${value}`);
        return fs.promises.readFile("./test2.txt");
    })
    .then((value) => {
        console.log(`ps test2.txt read : ${value}`);
        return fs.promises.readFile("./test3.txt");
    })
    .then((value) => {
        console.log(`ps test3.txt read : ${value}`);
    }   )
    .catch((error) => {
        console.log(`an error occurred : ${error}`);
    });

function delayedPromise(): Promise<void> {
    // return new Promise object
    return new Promise<void>
    ( // start constructor
        (
            resolve: () => void, // resolve function
            reject: () => void   // reject function
        ) => {
            // start of function definition
            function afterTimeout() {
                resolve();
            }
            setTimeout(afterTimeout, 1000);
            // end of function definition
        }
    ); // end constructor
}

delayedPromise().then(() => {
    console.log(`delayed promise returned`);
});

function errorPromise(): Promise<void> {
    return new Promise<void>(
        (   // constructor
            resolve: () => void,
            reject: () => void
        ) => {
            // function definition
            console.log(`2. calling reject()`);
            reject();
        }
    )
}
console.log(`1. calling errorPromise()`);
errorPromise().then(() => { })
    .catch(() => { console.log(`3. caught an error`) });