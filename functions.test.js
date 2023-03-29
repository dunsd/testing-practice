import { capitalise } from "./functions";
import { reverseString } from "./functions";
import { calculator } from "./functions";

test("capitalises first letter of string", () => {
expect(capitalise("test string")).toBe("Test string");
});

test("reverses a string", () => {
expect(reverseString("a test string")).toBe("gnirts tset a");
});

test("calculator add", () => {
    expect(calculator.add(4,9)).toBe(13);
});

test("calculator subtract", () => {
    expect(calculator.subtract(8,3)).toBe(5);
});

test("calculator divide", () => {
    expect(calculator.divide(10,2)).toBe(5);
});

test("calculator multiply", () => {
    expect(calculator.multiply(5,4)).toBe(20);
});