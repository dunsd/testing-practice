import caesarCipher from "./caesarCipher";

test("shifts lowercase string", () => {
    expect(caesarCipher("abcdefghijklmnopqrstuvwxyz", 1)).toBe("bcdefghijklmnopqrstuvwxyza");
})