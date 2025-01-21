import { sum } from "./sum";

//it関数
it ("1と2を足すと3になる", () => {
    expect(sum(1,2)).toBe(3);//toBeはマッチャー関数
})