describe("a group of tests", () => {
    test("first test", () => {
        expect("string value").toEqual("string value")
    })
    it("second test", () => {
        expect("hello").not.toEqual("world");
    })
    it("third test", () => {
        expect("abc").not.toEqual("def");
    })
});