describe("a group of tests that use only", () => {
    test.only("first test", () => {
        expect("string value").toEqual("string value")
    })
    fit("second test", () => {
        expect("abc").not.toEqual("def");
    })
});