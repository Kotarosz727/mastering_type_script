class AsyncTest {
    public execSlowFunction(callback: (value: string) => void) {
        setTimeout(() => {
            callback('completed.');
        }, 1000);
    }
}

describe('async test with done', () => {
    let result: string;
    let asyncTest = new AsyncTest();
    console.log('1.calling execSlowFunction');
    beforeEach((done: jest.DoneCallback) => {
        asyncTest.execSlowFunction((value:string) => {
            console.log('2.execSlowFunction callback');
            result = value;
            done();
        });
    });
    it('should return completed.', () => {
        console.log('3.expecting result');
        expect(result).toBe('completed.');
    });
});