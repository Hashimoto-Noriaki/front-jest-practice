//toBe
it("数値のテスト", () => {
    expect(5 * 8).toBe(40);
});

it("文字列のテスト",() => {
    expect("テストをするぞー").toBe("テストをするぞー");
});

it("Booleanをテストするぞー",() => {
    expect(true).toBe(true);
});

//toEqual
it("配列のテスト",() => {
    const arr1 = [100,200,300];
    const arr2 = [100,200,300];
    expect(arr1).toEqual(arr2);
})
