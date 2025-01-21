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
