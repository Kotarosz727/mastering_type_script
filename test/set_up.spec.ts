class GlobalCounter {
    counter: number = 0;
    increment() {
        this.counter++;
    }
}

describe("a group of set up tests", () => {
    let globalCounter: GlobalCounter;
    beforeAll(() => {
        globalCounter = new GlobalCounter();
    })
    beforeEach(() => {
        globalCounter.counter = 0;
    })
    afterEach(() => {
        console.log(`global Counter count: ${globalCounter.counter}`);
    })
    it("first test", () => {
        globalCounter.increment();
        expect(globalCounter.counter).toEqual(1);
    })
    it("second test", () => {
        expect(globalCounter.counter).toEqual(0);
    })
    it("third test", () => {
        globalCounter.increment();
        globalCounter.increment();
        expect(globalCounter.counter).toEqual(2);
    })
})

