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