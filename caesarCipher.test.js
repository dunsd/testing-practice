import caesarCipher from "./caesarCipher";

test("shifts lowercase string", () => {
    expect(caesarCipher("abcdefghijklmnopqrstuvwxy", 1)).toBe("bcdefghijklmnopqrstuvwxyz");
})

test("allows wrapping", () => {
    expect(caesarCipher("xyz", 1)).toBe("yza");
})

test("handles uppercase", () => {
    expect(caesarCipher("ABBDccd", 3)).toBe("DEEGffg");
})

test("handles punctuation", () => {
    expect(caesarCipher("abc$ >.$",1)).toBe("bcd$ >.$")
})