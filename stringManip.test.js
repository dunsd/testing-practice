import { capitalise, reverseString } from "./stringManip";

test("capitalises first letter of string", () => {
    expect(capitalise("test string")).toBe("Test string");
    });
    
    test("reverses a string", () => {
    expect(reverseString("a test string")).toBe("gnirts tset a");
    });
    