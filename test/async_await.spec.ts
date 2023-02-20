class AsyncAwait {
    delayedPromise(): Promise<string> {
        return new Promise<string>(
            (resolve: (str: string) => void,
             reject: (str: string) => void) => {
                setTimeout(() => {
                    console.log(`2. returning success`);
                    resolve('success');
                }, 1000)
            }
        )
    }
}

describe('async test with await', () => {
    let asyncWithPromise = new AsyncAwait();
    it('should return success', async () => {
        console.log(`1. calling delayedPromise`);
        let result = await asyncWithPromise.delayedPromise();
        console.log(`3. expecting result`);
        expect(result).toBe('success');
    })
});