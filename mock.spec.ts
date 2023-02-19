class MyCallBack {
  public execCallBack(
      value: number,
      callback: (value: number) => number
  ) {
    console.log("executing CallBack");
    callback(value);
  }
}

describe("mock test", () => {
  let mockCallBack = jest.fn(x => x + 1);
  let myCallBack = new MyCallBack();
    it("should call the callback", () => {
        myCallBack.execCallBack(1, mockCallBack);
        expect(mockCallBack).toHaveBeenCalled();
    })
    it("returned value is plus 1 on parameter", () => {
        myCallBack.execCallBack(1, mockCallBack);
        expect(mockCallBack.mock.results[0].value).toBe(2);
    })
});