//toThrow 関数にエラーがスルーすること

import { divide,ZeroDivisorError} from "./divide";

it("0で割るとエラーが発生する",()=> {
    expect(() => divide(10,1)).toThrow();
});