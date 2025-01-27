import { delay } from "./async_func";

it("delayが指定された時間後にメッセージを返す",async ()=> {
    const result = await delay("Jestの練習だ",1000);
    expect(result).toBe("Jestの練習だ");
});